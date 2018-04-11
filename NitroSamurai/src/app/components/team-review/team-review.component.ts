import { Component, OnInit } from "@angular/core";
import {Validators,FormBuilder,FormGroup,FormControl,FormArray} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-team-review",
  templateUrl: "./team-review.component.html",
  styleUrls: ["./team-review.component.css"]
})
export class TeamReviewComponent implements OnInit {
  ratingForm: FormGroup;
  starIds: number[][] = [];
  Team: string;
  Stars: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder,private route: ActivatedRoute) {
    this.Team = this.route.snapshot.paramMap.get("teamname");
    this.initForm();
  }

  ngOnInit() {}

  initForm():void{
    
this.ratingForm = this.fb.group({
        comment: [
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(140)
          ])
        ],
        stars: this.Stars
      });
  }

//     populateStars():void{
// // this.criteria = this.dbserv.getCriteria().map(res => res as Criteria[]);
//    // console.log(this.criteria);
//     let index = 0;

//     // this.criteria.subscribe(res => {
     
//     //   for (var Question in res) {
//     //     let temp: number[] = [];
//     //     console.log(index);
//     //     this.Stars.push(new FormControl(null, [Validators.required]));
//     //     for (var i = 0; i < 5; i++) {
//     //       console.log(i);
//     //       temp.push(Math.round(Math.random() * (500 - 1) + 1));
//     //     }
//     //     this.starIds[index] = temp;
//     //     console.log(this.starIds);
//     //     index++;
//     //   }
//     // });

//     this.dbserv.getCriteria().subscribe(res => {
//       this.criteria = res;
//       console.log(this.criteria)
//         for (var Question in res) {
//           let temp: number[] = [];
//           console.log(index);
//           this.Stars.push(new FormControl(null, [Validators.required]));
//           for (var i = 0; i < 5; i++) {
//             console.log(i);
//             temp.push(Math.round(Math.random() * (500 - 1) + 1));
//           }
//           this.starIds[index] = temp;
//           console.log(this.starIds);
//           index++;
//         }
//     });
//   }
    


}
