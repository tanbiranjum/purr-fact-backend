import { Injectable } from '@nestjs/common';
import { Prisma, Adoption as AdoptionModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AdoptionService {
  constructor(private readonly prisma: PrismaService) {}

  async createAdoption(data: Prisma.AdoptionCreateInput): Promise<AdoptionModel> {
    return this.prisma.adoption.create({ data });
  }

  async adoption(
    adoptionWhereUniqueInput: Prisma.AdoptionWhereUniqueInput,
  ): Promise<AdoptionModel | null> {
    return this.prisma.adoption.findUnique({
      where: adoptionWhereUniqueInput,
    });
  }

  async adoptions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AdoptionWhereUniqueInput;
    where?: Prisma.AdoptionWhereInput;
  }): Promise<AdoptionModel[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.adoption.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async updateAdoption(params: {
    where: Prisma.AdoptionWhereUniqueInput;
    data: Prisma.AdoptionUpdateInput;
  }): Promise<AdoptionModel> {
    const { data, where } = params;
    return this.prisma.adoption.update({
      data,
      where,
    });
  }

  async deleteAdoption(where: Prisma.AdoptionWhereUniqueInput): Promise<AdoptionModel> {
    return this.prisma.adoption.delete({
      where,
    });
  }

  async adoptionFromUser(where: Prisma.AdoptionWhereUniqueInput): Promise<AdoptionModel[]> {
    return this.prisma.adoption.findMany({
      where,
    });
  }
}
