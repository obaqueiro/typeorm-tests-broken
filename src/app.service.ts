import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
  }

  getHello(): string {
    return 'Hello World!';
  }
}
