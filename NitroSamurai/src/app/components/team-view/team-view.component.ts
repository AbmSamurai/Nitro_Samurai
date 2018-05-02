import { Component, OnInit,Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';
import { Team } from '../../models/Team';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {


  @Input() givenTeam: Team;
  constructor(private db: DatabaseService,private router:Router, protected ui: UiService) { }

  ngOnInit() {
    console.log("Team : ", this.givenTeam);
  }
    
}
