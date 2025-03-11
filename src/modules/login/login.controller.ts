import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  public loginUser(
    @Body() payload: { username: string; password: string },
  ): Promise<string> {
    return this.loginService.login(payload);
  }
}
