import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private auth: AuthenticationService){

  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
    ]);

  matcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStateMatcher();


  login(email, password){

    if(!(this.emailFormControl.hasError('email') || this.emailFormControl.hasError('required')) &&
      !(this.passwordFormControl.hasError('minlength') || this.passwordFormControl.hasError('required'))){

        console.log("Email: " + email + " Password: " + password)
        this.auth.signIn(email, password);

    }
  }

  googleLogin(){
    this.auth.googlePopUp();
  }

}


