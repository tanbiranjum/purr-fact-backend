import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Adoption } from '@prisma/client';

type SearchQuery = {
  name?: string;
  age?: string;
  size?: string;
  breed?: string;
};

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('')
  async searchPets(@Query() query: SearchQuery): Promise<Adoption[]> {
    return this.searchService.searchPets(query);
  }
}
