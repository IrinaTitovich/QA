import { Injectable } from '@angular/core';
import { MatIconLocation } from '@angular/material/icon';
import { ILogIn } from '../interfaces/log-in';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  public logIn:ILogIn = {
    logIn:false,
    email:'',
    password:''
  }

  constructor() { }
}
