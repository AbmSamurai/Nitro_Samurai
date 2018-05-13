import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  errorText:String = " Oops.. 404 Page Not Found";
  constructor(private cache:CacheService, private router:Router) { }

 
  ngOnInit() {
    this.cache.init();
    if(this.cache.hasFinishedInit()){
      console.log("HELLO?");
      this.router.navigate(['/dashboard']);
    }
  }




}
