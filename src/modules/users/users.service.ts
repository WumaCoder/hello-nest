import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRepo } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private userRepo: UserRepo) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.name = 'admin';
    user.username = 'admin';
    user.password = '123456';
    await this.userRepo.flush();
    return user;
  }

  findAll() {
    return `This action returns all users`;
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
