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
      console.log("inited");
      this.inited = true;
      this.selectedTeam = new Team();
      this.teams = new Array<Team>();
      console.log('constructor');
      this.subscriptions.push(this.auth.user$.subscribe(response => {
        console.log('WTF USER???',response);
        this.user = response['0'];
        console.log('HELLO?',this.user);
        console.log(this.subscriptions);
        this.getTeams()
       
      }));

      this.subscriptions.push(this.db.getReview().subscribe(response =>{
        this.reviewState = response as boolean;
        console.log('Review State',this.reviewState['reviewOpen']);
      }));
    }
  }

  getTeams(){
    this.subscriptions.push(this.db.teams.subscribe(response =>{
        console.log('TEAMS', response);
        this.teams =  response as Team[];
        //console.log('USER IN CACHE',this.user.role);
        console.log(this.subscriptions);
        if(this.user.role != "Manager"){
          console.log("NOT MANAGER");
          this.getGivenTeam(this.teams,this.user);
        }else{
          this.givenTeam = new Team();
          this.givenTeam.teamName = "Manager";
          console.log("Done init");
          this.doneInitialising = true;
        }
      }));
  }

  getLength(){
    return 
  }
  clear(){
    console.log("CLEAR",  this.subscriptions);
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

