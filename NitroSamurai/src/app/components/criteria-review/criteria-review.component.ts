import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criteria-review',
  templateUrl: './criteria-review.component.html',
  styleUrls: ['./criteria-review.component.css']
})
export class CriteriaReviewComponent implements OnInit {
  view: string = 'criteria';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setView(view){
    this.view = view;
  }

  back(){
    this.router.navigate(['/dashboard']);
  }
}
