import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from 'src/schemas/Person.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])]
})
export class PersonModule {}
