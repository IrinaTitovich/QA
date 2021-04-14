import { Pipe, PipeTransform } from '@angular/core';
import { IQuestion } from '../interfaces/question';
import { GetQuestionsService } from '../services/get-questions.service';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {
  constructor(public getQuestions:GetQuestionsService) { }

  transform(quesions:IQuestion[], searchText:string): IQuestion[] {
    let result:IQuestion[]=this.getQuestions.questions
    console.log(searchText)

    if (!searchText){
      return result
    }
    return result.filter((q:IQuestion)=>`${q.title} ${q.content}`.toLocaleLowerCase().includes(searchText.toLowerCase()))
  }

}
