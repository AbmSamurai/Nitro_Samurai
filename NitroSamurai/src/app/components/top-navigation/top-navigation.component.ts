import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(protected ui: UiService, protected router: Router) { }

  ngOnInit() {
  }


  registerTeam(){
    this.ui.showTeamRegistration = true;
    this.router.navigate(['login']);
  }
}
