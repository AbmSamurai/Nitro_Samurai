import { Component, OnInit,Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';
import { Team } from '../../models/Team';
import { UiService } from '../../services/ui.service';
import { User } from 'firebase/app';
import { CacheService } from '../../services/cache.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  subscription: Subscription;
  teamMembers: any[] = [];
  @Input() givenTeam: Team;
  constructor(private db: DatabaseService,private router:Router, protected ui: UiService, private cache: CacheService) {
  }

  ngOnInit() {
    
     console.log("Team : ", this.givenTeam);
    this.teamMembers = [];
     this.subscription = this.db.getTeamMembers(this.givenTeam.teamName).subscribe(response =>{
      this.teamMembers = response;
      this.subscription.unsubscribe();
    });
    // console.log('teamMembers',this.cache.teamMembers);
  }

    log(member: string){
      // console.log("Member : ", member);
    }

    getTeamMembers(){
      console.log(this.teamMembers);
      return  this.teamMembers;
    }
}
