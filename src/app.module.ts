import { Module } from '@nestjs/common';
import { PersonModule } from './person-module/person.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal : true
  }),
  MongooseModule.forRoot(process.env.DB_ACCES),
  PersonModule
]
})
export class AppModule {}
