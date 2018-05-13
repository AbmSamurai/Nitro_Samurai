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

  constructor(protected cache: CacheService,protected ui: UiService, protected router: Router,private auth:AuthenticationService) { }

  ngOnInit() {
    this.cache.init();
    console.log(this.cache.doneInitialising);
  }


  adminPanel(){
    this.router.navigate(['admin']);
  }

  logout(){
    this.cache.clear();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
