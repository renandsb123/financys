import { Category } from './category.model';

export class Entry {
   constructor(
      id:number ,
      name:string, 
      categoryId:Category,
      category: string, 
      paid: boolean, 
      date: Date, 
      amount: string, 
      type: string
    ){}
   }