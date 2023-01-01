import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Adoption, Pet } from '@prisma/client';

interface SearchResponse {
  adoptions: Adoption[];
  count: number;
}

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async searchPets(query: any): Promise<SearchResponse> {
    const page = query.page * 1 || 1;
    const limit = query.limit * 1 || 10;
    const skip = (page - 1) * limit;

    const sqlQuery = {
      include: {
        Pet: {
          include: {
            Breed: true,
            category: true,
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
              category: {
                name: {
                  contains: query.type,
                },
              },
            },
          },
        ],
      },
      skip,
      take: limit,
    };

    const adoptions = await this.prisma.adoption.findMany(sqlQuery);

    return {
      adoptions,
      count: adoptions.length,
    };
  }
}
