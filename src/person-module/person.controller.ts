import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { PersonService } from "./person.service"
import { CreatePersonDTO } from "./dto/person.dto"
import { createPerson } from "./interface/person.interface"

@Controller('person')
export class PersonController {
    
    constructor (private personService: PersonService){}

    @Post()
    async createPerson(@Body()body:CreatePersonDTO):Promise<createPerson>{
      try{
        return await this.personService.addNewPerson(body)
      }catch(error){
        return error
      }
    }

    @Get()
    async getAllPeople():Promise<createPerson[]>{
      try{
        return await this.personService.findAllPeople()
      } catch(error){
        return error
      }
    }

    @Get(':id')
    async getPersonById(@Param('id') id: string):Promise<createPerson>{
      try{
        return await this.personService.findPersonById(id)
      } catch(error){
        return error
      }
    }

    @Delete(':id')
    async deletePerson(@Param('id') id: string):Promise<createPerson|null>{
      try{
        return await this.personService.removePerson(id)
      } catch(error){
        return error
      }
    }
}
