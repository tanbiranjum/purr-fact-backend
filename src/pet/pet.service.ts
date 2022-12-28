import { Injectable } from '@nestjs/common';
import { Prisma, Pet } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PetService {
  constructor(private readonly prisma: PrismaService) {}

  async pet(petWhereUniqueInput: Prisma.PetWhereUniqueInput): Promise<Pet | null> {
    return this.prisma.pet.findUnique({
      where: petWhereUniqueInput,
    });
  }

  async pets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PetWhereUniqueInput;
    where?: Prisma.PetWhereInput;
  }): Promise<Pet[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.pet.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async createPet(data: Prisma.PetCreateInput): Promise<Pet> {
    return this.prisma.pet.create({
      data,
    });
  }

  async updatePet(params: {
    where: Prisma.PetWhereUniqueInput;
    data: Prisma.PetUpdateInput;
  }): Promise<Pet> {
    const { data, where } = params;
    return this.prisma.pet.update({
      data,
      where,
    });
  }

  async deletePet(where: Prisma.PetWhereUniqueInput): Promise<Pet> {
    return this.prisma.pet.delete({
      where,
    });
  }
}
