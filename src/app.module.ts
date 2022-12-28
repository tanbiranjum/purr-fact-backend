import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { UserModule } from './user/user.module';
import { AdoptionModule } from './adoption/adoption.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [PetModule, UserModule, AdoptionModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
