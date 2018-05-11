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
  constructor(protected db: DatabaseService, protected ui:UiService, protected cache: CacheService, private auth: AuthenticationService) {
    ui.showTopNav = true;
   }

  ngOnInit() {
    console.log("dashboard");
    this.db.openReview();
    var userSubscription = this.auth.user$.subscribe(response => {
      this.cache.user = response;
      console.log("Curr user", response);
      console.log(response[0].role == "Manager");
      if(response[0].role === "Manager"){
        this.ui.isManager = true;
      }else{
        this.ui.isManager = false;
      } 


      userSubscription.unsubscribe();
    })
  }

  getTeams(){
    return this.teams;
  }

}
