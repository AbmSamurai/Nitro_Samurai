// import { MyErrorStateMatcher } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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

  constructor(){
    this.roles.push(
      {viewValue: "Member"},
      {viewValue: "PO"},
      {viewValue: "Admin"},
    )
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


}


