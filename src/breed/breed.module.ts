import { Module } from '@nestjs/common';
import { BreedController } from './breed.controller';
import { Breed } from './breed';

@Module({
  controllers: [BreedController],
  providers: [Breed]
})
export class BreedModule {}
