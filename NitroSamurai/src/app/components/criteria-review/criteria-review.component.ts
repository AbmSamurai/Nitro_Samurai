import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria-review',
  templateUrl: './criteria-review.component.html',
  styleUrls: ['./criteria-review.component.css']
})
export class CriteriaReviewComponent implements OnInit {
  view: string = 'criteria';

  constructor() { }

  ngOnInit() {
  }

  setView(view){
    this.view = view;
  }
}
