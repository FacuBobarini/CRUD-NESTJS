import { Module } from '@nestjs/common';
import { CreateModuleModule } from './create-module/create-module.module';
import { ReadModuleModule } from './read-module/read-module.module';
import { UpdateMolduleModule } from './update-moldule/update-moldule.module';
import { DeleteModuleModule } from './delete-module/delete-module.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal : true
  }),
  MongooseModule.forRoot(process.env.DB_ACCES),
  CreateModuleModule, 
  ReadModuleModule, 
  UpdateMolduleModule, 
  DeleteModuleModule
]
})
export class AppModule {}
