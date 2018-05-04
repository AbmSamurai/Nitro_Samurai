import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(protected ui: UiService, protected router: Router, protected cache: CacheService, private auth:AuthenticationService) { }

  ngOnInit() {
  }


  registerTeam(){
    this.ui.showTeamRegistration = true;
    this.router.navigate(['login']);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
