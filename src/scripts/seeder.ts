import { SeedService } from '../seed/seed.service';

async function seed() {
  const seedService = new SeedService();
  await seedService.user();
}

seed();
