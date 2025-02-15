import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsMobilePhone,
  IsEmail,
} from 'class-validator';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  @MinLength(2, { message: 'Name should be at least 2 characters long' })
  @MaxLength(50, { message: 'Name should not be longer than 50 characters' })
  @Prop({ required: true })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Mobile number should not be empty' })
  @IsMobilePhone('en-IN')
  @Prop({ required: true, unique: true })
  mobile: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(8, { message: 'Password should be at least 8 characters long' })
  @MaxLength(20, {
    message: 'Password should not be longer than 20 characters',
  })
  @Prop({ required: true })
  password: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
