import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import { DatabaseService } from './database.service';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/User';

@Injectable()
export class CacheService {

  selectedTeam: Team;
  active: boolean = false;
  teams: Team[] = [];
  givenTeam: Team;
  reviewState: boolean;
  user: User;

  constructor(private db: DatabaseService, private auth: AuthenticationService) { 
    this.selectedTeam = new Team();
    this.givenTeam = new Team();
    this.teams = new Array<Team>();

    let userSubscription = this.auth.user$.subscribe(response => {
      console.log('WTF USER???',response[0]);
      this.user = response[0];
      let teamSubscription = this.db.teams.subscribe(response =>{
        this.teams =  response as Team[];
        
        this.getGivenTeam();
      });
    })



    let reviewSubscription = this.db.getReview().subscribe(response =>{
      this.reviewState = response as boolean;
      console.log('Review State',this.reviewState['reviewOpen']);
    });
  }

  getGivenTeam(){
    console.log('Teams', this.teams);

    console.log(JSON.stringify(this.user.team))

    if(this.user.team){
      console.log("WOWOWPOWOWOW");
      let result = this.teams.filter(team => {
        console.log('TEAM ITERATING ON', team);
        console.log('THIS.USER.TEAM', this.user.team);
        team.teamName == this.user.team
      });
    }

    console.log('Result',result);
    this.givenTeam = result[0];
    console.log('GIVEN TEAM',this.givenTeam);
  }

  setSelectedTeam(team: Team){
    this.selectedTeam  = team;
    this.active = true;
  }

  removeActive(){
    this.active = false;
  }
  getSelectedTeam(){
    return this.selectedTeam;
  }

  getActive(){
    return this.active;
  }

  getReview(){
    return this.reviewState['reviewOpen'];
  }
}
