import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Person } from "src/schemas/Person.schema";


@Injectable()
export class AppointmentService {
  constructor (@InjectModel(Person.name) private personModel: Model<Person>){}

    
}
