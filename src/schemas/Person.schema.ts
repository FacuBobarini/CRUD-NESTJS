import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
  timestamps: true
})
export class Person {

  @Prop({
      required: true,
      type: String,
  })
  name: string;

  @Prop({
      required: true,
      type: String,
  })
  lastName: string;

  @Prop({
      required: true,
      type: Number,     
  })
  dni: number
}

const PersonSchema =  SchemaFactory.createForClass(Person)

export {PersonSchema}