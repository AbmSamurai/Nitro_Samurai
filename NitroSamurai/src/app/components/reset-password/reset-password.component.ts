import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"]
})
export class ResetPasswordComponent implements OnInit {
  RestPassword: FormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {}

  resetpassword(email:string){
    this.auth.resetPassword(email);
  }
}
