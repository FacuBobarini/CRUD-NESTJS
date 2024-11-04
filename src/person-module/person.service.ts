import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Person } from "src/schemas/Person.schema";
import { CreatePersonDTO } from "./dto/person.dto";
import { createPerson } from "./interface/person.interface";


@Injectable()
export class PersonService {
  constructor (@InjectModel(Person.name) private personModel: Model<Person>){}

  addNewPerson(person:CreatePersonDTO):Promise<createPerson>{

    return new this.personModel(person).save()
  }

  findAllPeople():Promise<createPerson[]>{

    return  this.personModel.find()
  }
  
  findPersonById(id: string):Promise<createPerson | null>{

    return  this.personModel.findById(id)
  }

  removePerson(id: string):Promise<createPerson | null>{
    return this.personModel.findOneAndDelete({_id: id}).exec()
  }

    
}
