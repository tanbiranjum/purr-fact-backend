import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Adoption } from '@prisma/client';
import { AdoptionService } from './adoption.service';

@Controller('adoption')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Get()
  async findAll(): Promise<Adoption[]> {
    return this.adoptionService.adoptions({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Adoption> {
    return this.adoptionService.adoption({ id });
  }

  @Post()
  async create(@Body() CreatePetDto: any): Promise<Adoption> {
    return this.adoptionService.createAdoption(CreatePetDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() adoption: Adoption): Promise<Adoption> {
    return this.adoptionService.updateAdoption({
      where: { id },
      data: adoption,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Adoption> {
    return this.adoptionService.deleteAdoption({ id });
  }
}
