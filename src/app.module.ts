import { Module } from '@nestjs/common';
import { CreateModuleModule } from './create-module/create-module.module';
import { ReadModuleModule } from './read-module/read-module.module';
import { UpdateMolduleModule } from './update-moldule/update-moldule.module';
import { DeleteModuleModule } from './delete-module/delete-module.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal : true
  }),
  CreateModuleModule, 
  ReadModuleModule, 
  UpdateMolduleModule, 
  DeleteModuleModule
]
})
export class AppModule {}
