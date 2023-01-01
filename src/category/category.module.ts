import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { Category } from './category';

@Module({
  controllers: [CategoryController],
  providers: [Category]
})
export class CategoryModule {}
