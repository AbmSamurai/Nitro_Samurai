import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { DatabaseService } from '../../services/database.service';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../../services/ui.service';
import { CacheService } from '../../services/cache.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams: Team[];
  constructor(protected db: DatabaseService, protected ui:UiService, private cache: CacheService, private auth: AuthenticationService) {
    ui.showTopNav = true;
   }

  ngOnInit() {
    this.auth.user$.subscribe(response => {
      console.log("Curr user", response);
      console.log(response[0].role == "Manager");
      if(response[0].role === "Manager"){
        this.ui.isManager = true;
      }else{
        this.ui.isManager = false;
      } 
    })
    this.db.teams.subscribe( response =>{
    this.teams = response as Team[];
    console.log(this.teams);
    this.cache.teams = this.teams;
    }) ;

    
  }

  getTeams(){
    return this.teams;
  }

}
