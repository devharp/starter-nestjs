import { Injectable } from '@nestjs/common';
import { TryCatch } from 'src/exceptions/try-catch';
import { AuthService } from 'src/shared/auth/auth.service';

@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {}

  @TryCatch('Failed to login')
  public async login({
    username,
    password: sub,
  }: {
    username: string;
    password: string;
  }): Promise<string> {
    return await this.authService.login({ username, sub });
  }
}
