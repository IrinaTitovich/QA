import { AfterViewChecked, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetQuestionsService } from 'src/app/services/get-questions.service';
import { SearchTextPipe } from 'src/app/pipes/search-text.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
