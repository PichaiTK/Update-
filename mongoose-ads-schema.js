const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  type: { type: String, enum: ['image','video'], required: true },
  src: { type: String, required: true },       // URL to image/MP4 or HLS (.m3u8)
  thumb: { type: String },                      // poster/thumbnail
  caption: { type: String },
  durationMs: { type: Number, default: 5000 },  // used for images
  active: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Ad', AdSchema);
