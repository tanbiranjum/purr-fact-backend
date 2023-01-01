import { faker } from '@faker-js/faker';
import { PrismaClient, User } from '@prisma/client';

export class SeedService {
  private typePreferences: string[];
  private sizePreferences: string[];
  private agePreferences: string[];

  private readonly prisma = new PrismaClient();

  constructor() {
    this.typePreferences = ['CAT', 'DOG', 'BIRD', 'FISH', 'other'];
    this.sizePreferences = ['SMALL', 'MEDIUM', 'LARGE'];
    this.agePreferences = ['BABY', 'YOUNG', 'ADULT', 'SENIOR'];
  }

  async user() {
    for (let i = 0; i < 5; i++) {
      await this.prisma.user.create({
        data: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          address: faker.address.streetAddress(),
          typePreferences: ['CAT'],
        },
      });
    }
  }

  getRandomValue(preferences: string): string {
    if (preferences === 'typePreferences') {
      return this.typePreferences[Math.floor(Math.random() * this.typePreferences.length)];
    }
    if (preferences === 'sizePreferences') {
      return this.sizePreferences[Math.floor(Math.random() * this.sizePreferences.length)];
    }
    if (preferences === 'agePreferences') {
      return this.agePreferences[Math.floor(Math.random() * this.agePreferences.length)];
    }
  }
}
