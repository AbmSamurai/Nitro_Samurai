import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../models/Team';
import { TeamViewComponent } from '../team-view/team-view.component';
import { UiService } from '../../services/ui.service';
import { CacheService } from '../../services/cache.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
    @Input("team") team: Team;
  
    flipped: boolean;
    constructor(
      private router: Router, // private route: Routes,
      private ui: UiService,
      private cache: CacheService,
    ) {}
  
    ngOnInit() {
      console.log(this.team, "Here on card now");
      // this.team.Picture;
    }
  
    flip() {
      this.flipped = !this.flipped;
    }
  
    
    StartReview(selectedTeam: string) {
      console.log(selectedTeam, "is raedy for review");
      this.router.navigate(["review/", selectedTeam]);
    }

    sendTeam(specifiedTeam) {
      console.log("clicked on this team:", specifiedTeam.Name);
      // this.dbs.SneakedTeam = specifiedTeam;
      this.router.navigate(["teamView"]);
    }

    viewTeam(){
      this.cache.setSelectedTeam(this.team);
      this.ui.team = this.team;
    }
}
