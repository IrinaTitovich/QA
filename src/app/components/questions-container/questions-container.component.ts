import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { GetQuestionsService } from 'src/app/services/get-questions.service';
import { SearchTextPipe } from 'src/app/pipes/search-text.pipe';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.scss']
})
export class QuestionsContainerComponent implements OnInit,AfterViewChecked {


  constructor(public getQuestions:GetQuestionsService) { }

  ngOnInit(): void {
    this.getQuestions.getQuestions()
  }

  ngAfterViewChecked(){
    
  }
}
