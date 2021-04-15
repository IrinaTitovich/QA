import { Injectable } from '@angular/core';
import { ILogIn } from '../interfaces/log-in';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  public logIn:ILogIn = {
    logIn:true,
    email:'',
    password:''
  }

  constructor() { }
}
