import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { QuestionComponent } from './components/question/question.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    QuestionComponent,
    AskQuestionComponent,
    DialogComponent,
    SidenavComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
