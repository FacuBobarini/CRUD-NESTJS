import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
  timestamps: true
})
export class Person {

  @Prop({
      required: true,
      type: String,
  })
  name: String;

  @Prop({
      required: true,
      type: String,
  })
  lastName: String;

  @Prop({
      required: true,
      type: Number,     
  })
  dni: Number
}

const PersonSchema =  SchemaFactory.createForClass(Person)

export {PersonSchema}