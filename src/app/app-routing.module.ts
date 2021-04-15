import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { LogInComponent } from './content/log-in/log-in.component';
import { QuestionsContentComponent } from './content/questions-content/questions-content.component';

const routes: Routes = [
  {path:'', component:HomeComponent,},
  {path:'questions', component:QuestionsContentComponent},
  {path:'logIn', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
