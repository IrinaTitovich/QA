import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question!:IQuestion
  constructor() { }

  ngOnInit(): void {
  }

}
