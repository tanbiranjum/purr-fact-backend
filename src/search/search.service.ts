import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Adoption, Pet } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async searchPets(query: any): Promise<Adoption[]> {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const skip = (page - 1) * limit;

    return await this.prisma.adoption.findMany({
      include: {
        Pet: {
          include: {
            Breed: true,
          },
        },
      },
      where: {
        AND: [
          {
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
        ],
      },
      skip,
      take: limit,
    });
  }
}
