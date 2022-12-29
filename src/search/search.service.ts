import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Adoption, Pet } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async searchPets(query: any): Promise<Adoption[]> {
    return await this.prisma.adoption.findMany({
      include: {
        Pet: {
          include: {
            Breed: true,
          },
        },
      },
      where: {
        Pet: {
          name: {
            contains: query.name,
          },
          age: {
            equals: query.age,
          },
          size: {
            equals: query.size,
          },
          Breed: {
            name: {
              contains: query.breed,
            },
          },
        },
      },
    });
  }
}
