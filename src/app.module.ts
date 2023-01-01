import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { UserModule } from './user/user.module';
import { AdoptionModule } from './adoption/adoption.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SearchModule } from './search/search.module';
import { RequestModule } from './request/request.module';
import { BreedModule } from './breed/breed.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PetModule, UserModule, AdoptionModule, SearchModule, RequestModule, BreedModule, CategoryModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
