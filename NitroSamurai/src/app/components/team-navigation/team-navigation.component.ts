import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-team-navigation',
  templateUrl: './team-navigation.component.html',
  styleUrls: ['./team-navigation.component.css']
})
export class TeamNavigationComponent implements OnInit {

  constructor(private ui: UiService) { }

  ngOnInit() {
  }

  setSection(sectionName:string){
    this.ui.teamSection = sectionName;
  }

}
