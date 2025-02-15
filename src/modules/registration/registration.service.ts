import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './registration.schema';
import { Model } from 'mongoose';
import { TryCatch } from 'src/exceptions/try-catch';

@Injectable()
export class RegistrationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  @TryCatch('Failed to save user')
  public async save(userPayload: User): Promise<User> {
    return await this.userModel.create(userPayload);
  }
}
