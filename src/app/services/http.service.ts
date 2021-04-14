import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatabase, IQuestion } from '../interfaces/question';
import { AddQuestionService } from './add-question.service';

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
}
