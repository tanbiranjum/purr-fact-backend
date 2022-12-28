import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async createUser(@Body() userData: any): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
