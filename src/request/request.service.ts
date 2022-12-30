import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  //get all requests
  async requests() {
    
  }

  // get single request
  // update request
  // delete request
  // get all request from a single user
}
