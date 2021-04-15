import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDatabase, IQuestion } from '../interfaces/question';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  database:IDatabase={
    url:'https://angular-qa-c5037-default-rtdb.firebaseio.com/questions.json',
    method:'POST',
    
  }

  constructor(private httpClient:HttpClient) {  }

  addNewQuestion(question:string){
    return this.httpClient.post<IQuestion>(this.database.url, question,{headers:{'Content-Type':'application/json'}} )
  }

  getQuestions(){
    return this.httpClient.get<IQuestion[]>(this.database.url, {headers:{'Content-Type':'application/json'}} )
  }
}
