// Express example (minimal) -- filename: server.js
// npm install express mongoose bcrypt jsonwebtoken body-parser cors
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const JWT_SECRET = process.env.JWT_SECRET || 'change-me';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';

// Mongoose schemas (see detailed schema block below for full)
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true },
  name: String,
  passwordHash: String,
  role: { type: String, default: 'USER' },
  banned: { type: Boolean, default: false }
}, { timestamps: true });

const adSchema = new mongoose.Schema({
  type: { type: String, enum: ['image','video'], required: true },
  src: { type: String, required: true },
  caption: String,
  thumb: String,
  durationMs: { type: Number, default: 5000 },
  active: { type: Boolean, default: true },
  createdBy: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Ad = mongoose.model('Ad', adSchema);

async function main(){
  await mongoose.connect(MONGO_URI);
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.post('/api/signup', async (req, res) => {
    const { email, password, name, role } = req.body;
    if(!email || !password) return res.status(400).json({ error:'email/password required' });
    const existing = await User.findOne({ email });
    if(existing) return res.status(409).json({ error:'email exists' });
    const hash = await bcrypt.hash(password, 10);
    const u = await User.create({ email, name, passwordHash: hash, role: role || 'USER' });
    const token = jwt.sign({ sub: u._id, role: u.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { email: u.email, name: u.name, role: u.role } });
  });

  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const u = await User.findOne({ email });
    if(!u) return res.status(401).json({ error:'invalid' });
    const ok = await bcrypt.compare(password, u.passwordHash);
    if(!ok) return res.status(401).json({ error:'invalid' });
    if(u.banned) return res.status(403).json({ error:'banned' });
    const token = jwt.sign({ sub: u._id, role: u.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { email: u.email, name: u.name, role: u.role } });
  });

  // Protected ad endpoints (basic)
  app.post('/api/ads', async (req, res) => {
    // In production: authenticate (JWT), validate role==ADMIN
    const { type, src, caption, thumb, durationMs } = req.body;
    const ad = await Ad.create({ type, src, caption, thumb, durationMs, createdBy: req.body.createdBy || 'system' });
    res.json(ad);
  });

  app.get('/api/ads', async (req, res) => {
    const items = await Ad.find({ active: true }).sort({ createdAt: -1 }).lean();
    res.json(items);
  });

  app.listen(4000, ()=> console.log('API listening 4000'));
}
main().catch(console.error);
