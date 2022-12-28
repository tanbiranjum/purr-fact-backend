import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import {Prisma, User} from '@prisma/client'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({ data });
    }
}