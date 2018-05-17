import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import { DatabaseService } from './database.service';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/User';

@Injectable()
export class CacheService {

  selectedTeam: Team = new Team();
  active: boolean = false;
  teams: Team[] = [];
  givenTeam;
  reviewState: boolean;
  user;

  constructor(private db: DatabaseService, private auth: AuthenticationService) { 
    this.db.teams.subscribe(response =>{
      this.teams =  response as Team[];
      console.log(this.teams);
      this.getGivenTeam();
    });


    let subscription = this.db.getReview().subscribe(response =>{
      this.reviewState = response as boolean;
      console.log('Review State',this.reviewState['reviewOpen']);
    });
  }

  getGivenTeam(){
    console.log( this.teams);
    this.givenTeam = this.teams.filter(team => team.teamName == "RTW")
    console.log('GIVEN TEAM',this.givenTeam[0]);
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
