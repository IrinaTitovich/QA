import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IQuestion } from 'src/app/interfaces/question';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})

export class AskQuestionComponent implements OnInit {

  constructor(public addQuestion:AddQuestionService) { }

  ngOnInit(): void {
  }

  addQuestionTitle(title:string):void{
    this.addQuestion.question.title = title
    console.log(title)
  }
  addQuestionContent(content:string):void{
    this.addQuestion.question.content=content
    console.log(this.addQuestion.question)
  }

}
