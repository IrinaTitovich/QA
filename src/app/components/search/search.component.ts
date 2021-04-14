import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { GetQuestionsService } from 'src/app/services/get-questions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public getQuestions:GetQuestionsService) { }

  ngOnInit(): void {
  }

  filter(value:string):void{
    this.getQuestions.search = value
  }
}
