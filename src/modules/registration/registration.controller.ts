import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './registration.schema';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @Post()
  public createUser(@Body() payload: User): void {
    this.registrationService.save(payload);
  }

  @Get()
  public test(): string {
    return 'Hello';
  }
}
