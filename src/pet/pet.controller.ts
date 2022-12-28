import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}
  
  @Get()
  async findAll() {
    return this.petService.pets({});
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.petService.pet({ id });
  }
  @Post()
  async create(@Body() createPetDto: any) {
    return this.petService.createPet(createPetDto);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: any) {
    return this.petService.updatePet({
      where: { id },
      data: updatePetDto,
    });
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.petService.deletePet({ id });
  }
}
