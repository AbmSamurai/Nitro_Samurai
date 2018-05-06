import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  reviewState:boolean;

  constructor(private db: DatabaseService, protected cache:CacheService) { }

  ngOnInit() {   
  }

  openReview(){
    this.db.openReview();
  }

  closeReview(){
    this.db.closeReview();
  }

}
