import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/registration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EEnvironments } from './enums/environments.enum';
import { AuthModule } from './shared/auth/auth.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    RegistrationModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes config available globally
      envFilePath: EEnvironments.FilePath, // Envrionment Variable's file path
    }),
    MongooseModule.forRoot(
      process.env.NODE_ENV === EEnvironments.Production
        ? process.env.REMOTE_DB_URI
        : process.env.LOCAL_DB_URI,
    ),
    AuthModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
