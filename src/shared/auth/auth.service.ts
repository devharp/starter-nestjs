import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: { username: string; sub: string }): Promise<string> {
    return this.jwtService.sign(user);
  }
}
