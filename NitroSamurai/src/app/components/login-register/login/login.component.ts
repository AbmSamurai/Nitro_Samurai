import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
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
  loginForm:FormGroup;

  constructor(private router:Router, private auth: AuthenticationService,private fb:FormBuilder){

    this.loginForm = fb.group({ 
      emailFormControl: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
    passwordFormControl:[
      null,Validators.compose([Validators.required,Validators.minLength(8)])
    ]
   });
  }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(8)
  //   ]);

  matcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStateMatcher();


  login(Details){

    // if(!(this.emailFormControl.hasError('email') || this.emailFormControl.hasError('required')) &&
    //   !(this.passwordFormControl.hasError('minlength') || this.passwordFormControl.hasError('required'))){
//console.log(this.loginForm.value)
        console.log("Email: " + Details.emailFormControl + " Password: " + Details.passwordFormControl)
        this.auth.signIn( Details.emailFormControl as String, Details.passwordFormControl);

    
  }

  googleLogin(){
    this.auth.googlePopUp();
  }

}


