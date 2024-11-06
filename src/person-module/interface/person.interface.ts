
export interface PersonInterface{
  _id:string;
  name:string;
  lastName:string;
  dni:number;
}

export interface ResponsePersonInterface{
  status:string;
  message?:any;
  person?:PersonInterface;
  people?:PersonInterface[];
}