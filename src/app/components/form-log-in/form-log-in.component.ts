import { Component, OnInit } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.scss']
})
export class FormLogInComponent implements OnInit {
  value:any = ''
  

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  hide = true;

  constructor() { }

  ngOnInit(): void {

  }

  click(form:any):void{
    console.log(form)
  }

  getErrorMessageEmail():string {
    if (this.email.hasError('required')) {
      return 'You must enter your email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword():string {
    if (this.password.hasError('required')) {
      return 'You must enter your password';
    }
    if (this.password.hasError('minlength')) {
      return 'You must enter 6 signs';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }
}
