import { wrap } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRepo } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepo) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
