import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from 'src/schemas/Person.schema';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
