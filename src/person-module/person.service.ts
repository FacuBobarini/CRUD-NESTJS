import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Person } from "src/schemas/Person.schema";
import { CreatePersonDTO, UpdatepersonDTO } from "./dto/person.dto";
import { PersonInterface } from "./interface/person.interface";


@Injectable()
export class PersonService {
  constructor (@InjectModel(Person.name) private personModel: Model<PersonInterface>){}

  addNewPerson(person:CreatePersonDTO): Promise<PersonInterface>{

    return new this.personModel(person).save()
  }

  findAllPeople(): Promise<PersonInterface[]>{

    return  this.personModel.find().select('-createdAt -updatedAt -__v' )
  }
  
  findPersonById(id: string): Promise<PersonInterface | null>{

    return  this.personModel.findById(id).select('-createdAt -updatedAt -__v' )
  }

  removePerson(id: string): Promise<PersonInterface | null>{

    return this.personModel.findOneAndDelete({_id: id}).select('-createdAt -updatedAt -__v' )
  }

  findAndUpdatePerson(id: string , personUpdate: UpdatepersonDTO): Promise<PersonInterface>{
    
    return this.personModel.findByIdAndUpdate(id, personUpdate).select('-createdAt -updatedAt -__v' )
}
    
}
