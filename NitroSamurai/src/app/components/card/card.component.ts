import { DatabaseService } from "./../../services/database.service";
import { Component, OnInit, Input, SimpleChanges, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Team } from "../../models/Team";
import { TeamViewComponent } from "../team-view/team-view.component";
import { UiService } from "../../services/ui.service";
import { CacheService } from "../../services/cache.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit,OnChanges{
  // tslint:disable-next-line:no-input-rename
  @Input("team") team: Team;

  flipped: boolean;
  canRate: boolean;
  constructor(
    private router: Router, // private route: Routes,
    private ui: UiService,
    private cache: CacheService,
    private db: DatabaseService
  ) {}

  ngOnInit() {}

  flip() {
    this.flipped = !this.flipped;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['team']){
      console.log("Team nigga",this.team.teamName)
      this.db.canRateCheck(this.team.teamName).then(response => {
        console.log("Check",response)
      if (response) {
        this.canRate = true;
      } else this.canRate = false;
    });
    }
  }
  isRateable(Team: string) {
    return 
  }

  StartReview(selectedTeam: string) {
    this.router.navigate(["review/", selectedTeam]);
  }

  sendTeam(specifiedTeam) {
    this.router.navigate(["teamView"]);
  }

  viewTeam() {
    this.cache.setSelectedTeam(this.team);
    this.ui.team = this.team;
  }
}
