import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { DatabaseService } from "../../services/database.service";
import { CacheService } from "../../services/cache.service";


@Component({
  selector: "app-sprint-details",
  templateUrl: "./sprint-details.component.html",
  styleUrls: ["./sprint-details.component.css"]
})
export class SprintDetailsComponent implements OnInit {
  startDate: string;
  sprintForm: FormGroup;
  endDate: string;

  teamLeader;
  team;
  currentSprint;

  // sprintNum:number;
  velocity: number;

  sprintPoints = 0;
  newSprintText = ' (New sprint!)';

  minDate = new Date().toISOString().substr(0, 10);

  constructor(private fb: FormBuilder, protected db:DatabaseService, private cache:CacheService) {


    this.sprintForm = fb.group({
      points: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[1-9]*$')
        ])
      ],
      Start: [{disabled:true}, Validators.compose([Validators.required])],
      End: [{disabled:true}, Validators.compose([Validators.required])]
    });

  }

  ngOnInit() {    

    this.cache.teams.map(element => {
  
      if (element.teamName === this.cache.user[0]['team']) {
        this.team = element;
        this.db.getTeamSprint(this.team.name);
        //  this.sprintNum=this.db.teamHighestSprint;
       
      }

    });


  this.db.sprints.subscribe(response =>
    response.map(element => {
      if (element.id === (this.team.name + '-' + (this.db.teamHighestSprint + 1)) && !element.open) {
        this.newSprintText = ' (Current sprint)';
        this.startDate = element.startDate;
        this.endDate = element.endDate;
        this.sprintPoints = element.points;
      } else if (element.id === (this.team.name + '-' + this.db.teamHighestSprint) && !element.open) {
        this.newSprintText = ' (New sprint!)';
      }
    })
  );}

  start(sprintNum) {
    this.db.createSprint(this.team.teamName, sprintNum, this.sprintPoints, this.startDate, this.endDate);
  }

  end() {
      this.endDate = "";
      this.db.editEndDate(this.endDate.substr(0, 10), this.team.teamName);
      this.db.getTeamSprint(this.team.name);
      this.sprintPoints = 0;
      this.startDate = "";
      // this.db.teamHighestSprint++;
   
  }
}
