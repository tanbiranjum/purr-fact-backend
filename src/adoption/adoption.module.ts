import { Module } from '@nestjs/common';
import { AdoptionController } from './adoption.controller';
import { Adoption } from './adoption.service';

@Module({
  controllers: [AdoptionController],
  providers: [Adoption]
})
export class AdoptionModule {}
