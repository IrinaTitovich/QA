import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { QuestionComponent } from './components/question/question.component';
import { AskQuestionComponent } from './components/question/ask-question/ask-question.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';
import { SearchTextPipe } from './pipes/search-text.pipe';
import { QuestionsContentComponent } from './content/questions-content/questions-content.component';
import { HomeComponent } from './content/home/home.component';
import { LogInComponent } from './content/log-in/log-in.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormLogInComponent } from './components/form-log-in/form-log-in.component';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    QuestionComponent,
    AskQuestionComponent,
    DialogComponent,
    SidenavComponent,
    QuestionsContainerComponent,
    SearchTextPipe,
    QuestionsContentComponent,
    HomeComponent,
    LogInComponent,
    FormLogInComponent,
    FormCreateAccountComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
