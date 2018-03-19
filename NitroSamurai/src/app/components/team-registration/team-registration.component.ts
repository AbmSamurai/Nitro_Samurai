import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";
import { DatabaseService } from "../../services/database.service";
import { Team } from "../../models/Team";

@Component({
  selector: "app-team-registration",
  templateUrl: "./team-registration.component.html",
  styleUrls: ["./team-registration.component.css"]
})
export class TeamRegistrationComponent implements OnInit {
  team: Team = new Team();

  profilePicture: ProfilePicture;
  profilePicUrl: any;
  uploadPercentage: number;
  constructor(private router: Router, private db: DatabaseService) {}

  ngOnInit() {}

  teamNameFormControl = new FormControl("", [Validators.required]);

  passwordFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ]);

  matcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStateMatcher();

  registerTeam() {
    this.team.teamName = this.teamNameFormControl.value;
    this.db.createTeam(this.team);
  }

  profileUpload(event: any) {
    this.db.uploadProfilePicture(event, this.team.teamName);
    this.filePreview(event);
  }

  filePreview(event: any) {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.profilePicUrl = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  submit() {
    var temp = this.db.getDownloadUrl().subscribe(response => {
      this.team.picture = response as string;
      console.log(temp);
      this.db.createTeam(this.team).then(response => {
        this.router.navigate(["/dashboard"]);
      });
    });
  }
}

export class ProfilePicture {
  file: File;
  url: string;
  teamName: String;

  constructor(file: File) {
    this.file = file;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
