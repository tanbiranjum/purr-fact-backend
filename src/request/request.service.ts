import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdoptionRequest, Prisma } from '@prisma/client';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  //get all requests
  async requests(): Promise<AdoptionRequest[]> {
    return await this.prisma.adoptionRequest.findMany({});
  }

  //get single request
  async request(uniqueField: Prisma.AdoptionRequestWhereUniqueInput): Promise<AdoptionRequest> {
    return await this.prisma.adoptionRequest.findUnique({
      where: uniqueField,
    });
  }

  //update single request
  async updateRequest(
    where: Prisma.AdoptionRequestWhereUniqueInput,
    data: Prisma.AdoptionRequestUpdateInput,
  ): Promise<AdoptionRequest> {
    return await this.prisma.adoptionRequest.update({
      data,
      where,
    });
  }

  async deleteRequest(uniqueField: Prisma.AdoptionRequestWhereUniqueInput) {
    return await this.prisma.adoptionRequest.delete({
      where: uniqueField,
    });
  }

  async requestsFromUser(
    uniqueField: Prisma.AdoptionRequestWhereUniqueInput,
  ): Promise<AdoptionRequest[]> {
    return await this.prisma.adoptionRequest.findMany({
      where: uniqueField,
    });
  }

  // get single request
  // update request
  // delete request
  // get all request from a single user
}
