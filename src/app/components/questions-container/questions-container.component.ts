import { AfterViewChecked,  Component, OnChanges, OnInit } from '@angular/core';
import { GetQuestionsService } from 'src/app/services/get-questions.service';


@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.scss'],
})
export class QuestionsContainerComponent implements OnInit,AfterViewChecked,OnChanges {


  constructor(public getQuestions:GetQuestionsService) { }


  ngOnInit(): void {
    this.getQuestions.getQuestions()
  }

  ngAfterViewChecked(){
    
  }
  ngOnChanges():void{

  }


}
