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
import { UiService } from "../../services/ui.service";

@Component({
  selector: "app-team-registration",
  templateUrl: "./team-registration.component.html",
  styleUrls: ["./team-registration.component.css"]
})
export class TeamRegistrationComponent implements OnInit {
  team: Team = new Team();
  fileName: string = "";
  downloadUrl: string = "";
  profilePicture: ProfilePicture;
  profilePicUrl: any;
  uploadPercentage: number;
  buttonDisabled: boolean = true;

  
  constructor(private router: Router, protected db: DatabaseService, protected ui: UiService) {}

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

  profileUpload(event: any, fileInput: any) {

    this.db.uploadProfilePicture(event, this.teamNameFormControl.value);
    this.filePreview(event);
    this.checkDl(fileInput);
  }

  filePreview(event: any) {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.profilePicUrl = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }


  triggerFile(fileInput: any) {
    // do something
    fileInput.click();
  }

  submit() {
    this.team.picture = this.downloadUrl;
    this.team.teamName = this.teamNameFormControl.value;

    this.db.createTeam(this.team).then(response => {
      this.router.navigate(["/dashboard"]);
    });
  }

  checkDl(fileInput: any){
    this.db.getDownloadUrl().subscribe(response =>{

      if(response){
        this.ui.showSpinner = false;
        this.buttonDisabled = false;
        this.fileName = this.db.filePath; 
        this.downloadUrl = response;
        this.setInputFieldValue(fileInput);
      }
    });
  }

  setInputFieldValue(fileInput: any){
    fileInput.value = this.downloadUrl;
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
