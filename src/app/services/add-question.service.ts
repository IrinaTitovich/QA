import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { IDatabase, IQuestion } from '../interfaces/question';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  question:IQuestion={
    title:'',
    content:'',
    rate:null,
  }

  constructor(public httpService:HttpService) { }

  addNewQuestion():void{
    if (this.question.title.length === 0){
      this.question.title = 'No title'
    }
    if (this.question.content.length === 0){
      return
    }
    this.httpService.addNewQuestion(JSON.stringify(this.question)).pipe(first()).subscribe(resp=>console.log(resp))
  }

}
