import { AuthenticationService } from './../../../services/authentication.service';
// import { MyErrorStateMatcher } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  roles: Array<{viewValue: string}> = [];
  RegisterForm:FormGroup;
  constructor(private afAuth:AuthenticationService ,private fb :FormBuilder){
    this.roles.push(
      {viewValue: "Member"},
      {viewValue: "PO"},
      {viewValue: "Admin"},
    )
    this.RegisterForm = this.fb.group({
      emailFormControl: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      passwordFormControl: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      nameFormControl: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[A-Za-z]{1,32}")
        ])
      ],
      selectFormControl: [
        null,
        Validators.compose([Validators.required])
      ]
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-z]{1,32}")
  ]);

  selectFormControl = new FormControl('', [
    Validators.required
  ]);

  nameMatcher = new MyErrorStateMatcher();
  emailMatcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStateMatcher();

  signUp(){

  }

}


