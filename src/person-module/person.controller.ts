import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"
import { PersonService } from "./person.service"
import { CreatePersonDTO, UpdatepersonDTO } from "./dto/person.dto"
import { PersonInterface, ResponsePersonInterface } from "./interface/person.interface"

@Controller('person')
export class PersonController {
    
    constructor (private personService: PersonService){}

    @Post()
    async createPerson(@Body()body:CreatePersonDTO): Promise<ResponsePersonInterface>{
      try{
        const newPerson:PersonInterface = await this.personService.addNewPerson(body)

        return {status: 'success', person: newPerson}

      }catch(error){
        return {status: 'failed', message: error}
      }
    }

    @Get()
    async getAllPeople(): Promise<ResponsePersonInterface>{
      try{
        const personResult:PersonInterface[] = await this.personService.findAllPeople()

        return {status: 'success', people: personResult}

      } catch(error){
        return {status: 'failed', message: error}
      }
    }

    @Get(':id')
    async getPersonById(@Param('id') id: string): Promise<ResponsePersonInterface>{
      try{
        const personResult: PersonInterface = await this.personService.findPersonById(id)

        return {status: 'success', person: personResult}

      } catch(error){
        return {status: 'failed', message: error}
      }
    }

    @Delete(':id')
    async deletePerson(@Param('id') id: string): Promise<ResponsePersonInterface>{
      try{
        const deletedPerson: PersonInterface = await this.personService.removePerson(id)

        return {status: 'success', person: deletedPerson} 

      } catch(error){
        return {status: 'failed', message: error}
      }
    }

    @Patch(':id')
    async updatePerson(@Param('id') id: string,@Body()body: UpdatepersonDTO): Promise<ResponsePersonInterface>{
        try{
          const updatedPerson: PersonInterface = await this.personService.findAndUpdatePerson(id,body)

          return {status: 'success', person: updatedPerson}
        }
        catch(error){
          return {status: 'failed', message: error}
        }
    }
}
