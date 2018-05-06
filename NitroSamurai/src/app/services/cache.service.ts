import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import { DatabaseService } from './database.service';

@Injectable()
export class CacheService {

  selectedTeam: Team = new Team();
  active: boolean = false;
  teams: Team[] = [];
  reviewState: boolean;

  constructor(private db: DatabaseService) { 
    this.db.teams.subscribe(response =>{
      this.teams =  response as Team[];
      console.log(this.teams);
    });


    let subscription = this.db.getReview().subscribe(response =>{
      this.reviewState = response as boolean;
      console.log('Review State',this.reviewState['reviewOpen']);
    });
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
