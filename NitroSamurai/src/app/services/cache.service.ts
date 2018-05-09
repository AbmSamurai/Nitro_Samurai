import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import { DatabaseService } from './database.service';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/User';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CacheService {

  subscriptions: Subscription[] = [];
  selectedTeam: Team;
  active: boolean = false;
  inited: boolean = false;
  teams: Team[] = [];
  givenTeam: Team = new Team();
  doneInitialising: boolean = false;
  reviewState: boolean;
  teamsSub;
  user: User;

  constructor(private db: DatabaseService, private auth: AuthenticationService) { 
  }


  init(){
    if(!this.inited){
      this.inited = true;
      this.selectedTeam = new Team();
      this.teams = new Array<Team>();
      this.subscriptions.push(this.auth.user$.subscribe(response => {
        this.user = response['0'];
        this.getTeams()
      }));

      this.subscriptions.push(this.db.getReview().subscribe(response =>{
        this.reviewState = response as boolean;
      }));
    }
  }

  getTeams(){
    this.subscriptions.push(this.db.getAllTeams().subscribe(response =>{
        this.teams =  response as Team[];
        if(this.user.role != "Manager"){
          this.getGivenTeam(this.teams,this.user);
        }else{
          this.givenTeam = new Team();
          this.givenTeam.teamName = "Manager";
          this.doneInitialising = true;
        }
      }));
  }
  clear(){
    this.subscriptions.forEach(subscription =>subscription.unsubscribe())
    this.subscriptions = [];
    this.selectedTeam = new Team();
    this.active = false;
    this.inited= false;
    this.teams = [];
    this.givenTeam = new Team();
    this.doneInitialising= false;
    this.reviewState = false;
    this.user = null;
    //this.teamsSub.unsubscribe();
  }

  
  getUserRole(){
    return this.user.role;
  }

  hasFinishedInit(){
    return this.doneInitialising;
  }


  getGivenTeam(teams, userTeam){
    this.givenTeam = teams.filter(team => team.teamName == userTeam.team);
    this.givenTeam = this.givenTeam[0];
    this.doneInitialising = true;
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

