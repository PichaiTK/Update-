// NestJS skeleton (TypeScript fragments)
// AuthController: signup/login routes, AdsController: get/post ads

// auth.controller.ts
import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('signup') async signup(@Body() dto){ return this.auth.signup(dto); }
  @Post('login') async login(@Body() dto){ return this.auth.login(dto); }
}

// auth.service.ts (pseudo)
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<any>){}
  async signup(dto){ const existing = await this.userModel.findOne({email:dto.email}); if(existing) throw new Error('exists'); const hash = await bcrypt.hash(dto.password,10); const u = await this.userModel.create({email:dto.email,name:dto.name,passwordHash:hash,role:dto.role||'USER'}); const token = jwt.sign({sub:u._id, role:u.role}, process.env.JWT_SECRET); return { token, user: {email:u.email,name:u.name,role:u.role} }; }
  async login(dto){ const u = await this.userModel.findOne({email:dto.email}); if(!u) throw new ForbiddenException(); const ok = await bcrypt.compare(dto.password, u.passwordHash); if(!ok) throw new ForbiddenException(); const token = jwt.sign({sub:u._id, role:u.role}, process.env.JWT_SECRET); return { token, user: {email:u.email,name:u.name,role:u.role} }; }
}
