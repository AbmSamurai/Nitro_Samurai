import { AuthenticationService } from './../../../services/authentication.service';
import { Team } from './../../../models/Team';
import { OnInit } from '@angular/core';
import { DatabaseService } from './../../../services/database.service';
// import { MyErrorStateMatcher } from './../login/login.component';
import { Component } from '@angular/core';
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
export class RegisterComponent implements OnInit {
  roles: Array<{viewValue: string}> = [];
  teams;

  constructor(private db: DatabaseService, private auth: AuthenticationService){
    this.roles.push(
      {viewValue: "Member"},
      {viewValue: "Leader"},
      {viewValue: "Manager"},
      
    )
    
  }

  ngOnInit(){
    this.db.teams.subscribe( response =>{
      this.teams = response as Team[];
      // console.log(this.teams[1].teamName);
      }) ;
  
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
    Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")
  ]);

  selectFormControl = new FormControl('', [
    Validators.required
  ]);

  nameMatcher = new MyErrorStateMatcher();
  emailMatcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStateMatcher();

  signUp(email, password, myName, role, team) {
    let userTeam = team;
    if(role =="Manager"){
      userTeam = "none"; 
    }
    this.auth.signUp(email, password, myName, role, userTeam);
  }

}


