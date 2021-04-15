import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question';
import { HttpService } from './http.service';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  search:string=''

  questions:IQuestion[]=[]

  constructor(public httpService:HttpService) { }

  getQuestions(){
    this.httpService.getQuestions().pipe(
      first(),
      map(item=>Object.values(item))
    ).subscribe(resp=>this.questions = resp)
  }


}
