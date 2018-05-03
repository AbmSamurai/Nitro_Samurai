import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(protected ui: UiService, protected router: Router, protected cache: CacheService) { }

  ngOnInit() {
  }


  registerTeam(){
    this.ui.showTeamRegistration = true;
    this.router.navigate(['login']);
  }
}
