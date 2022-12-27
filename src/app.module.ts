import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PetModule, UserModule],
})
export class AppModule {}
