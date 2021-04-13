import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QA';

  constructor(){

  }

}
