import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdoptionController } from './adoption.controller';
import { AdoptionService } from './adoption.service';

@Module({
  controllers: [AdoptionController],
  providers: [AdoptionService, PrismaService],
})
export class AdoptionModule {}
