import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './registration.schema';

@Controller('registration')
export class RegistrationController {
  @Post()
  public createUser(@Body() payload: User): void {
    console.log(payload);
  }

  @Get()
  public test(): string {
    return 'Hello';
  }
}
