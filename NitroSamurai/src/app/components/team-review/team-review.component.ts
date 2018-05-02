import { DatabaseService } from "./../../services/database.service";
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Criteria } from "../../models/criteria";

@Component({
  selector: "app-team-review",
  templateUrl: "./team-review.component.html",
  styleUrls: ["./team-review.component.css"]
})
export class TeamReviewComponent implements OnInit {
  ratingForm: FormGroup;
  starIds: number[][] = [];
  Team: string;
  visible: boolean = false;
  Stars: FormArray = new FormArray([]);
  criteria: Criteria[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dbserv: DatabaseService
  ) {
    this.Team = this.route.snapshot.paramMap.get("teamname");
    this.initForm();
    this.populateStars();
    this.ratingForm = fb.group({
      comment: [null],
      stars: this.Stars
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    }, 2500);
  }

  initForm(): void {
    this.ratingForm = this.fb.group({
      comment: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(140)])
      ],
      stars: this.Stars
    });
  }
  submitRating(review) {
    console.log(review);
    const rating = review.stars.reduce((total, val) => total + val);
    this.dbserv.updateRating(rating, this.Team);
    this.ratingForm.reset();
  }
  populateStars(): void {
    let index = 0;
    this.dbserv.getCriteria().subscribe(res => {
      this.criteria = res;
      console.log(this.criteria);
      for (var Question in res) {
        let temp: number[] = [];
        console.log(index);
        this.Stars.push(new FormControl(null, [Validators.required]));
        for (var i = 0; i < 5; i++) {
          console.log(i);
          temp.push(Math.round(Math.random() * (500 - 1) + 1));
        }
        this.starIds[index] = temp;
        console.log(this.starIds);
        index++;
      }
    });
  }
}
