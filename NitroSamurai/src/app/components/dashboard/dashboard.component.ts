import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { DatabaseService } from '../../services/database.service';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams: Team[];
  constructor(protected db: DatabaseService, protected ui:UiService) {
    ui.showTopNav = true;
   }

  ngOnInit() {
   this.db.teams.subscribe( response =>{
    this.teams = response as Team[];
    console.log(this.teams);
    }) ;

    
  }

}
