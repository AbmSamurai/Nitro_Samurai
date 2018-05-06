import { element } from 'protractor';

import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { Question, Criteria } from '../../../models/criteria';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})


export class CriteriaComponent implements OnInit {
questions: Question[] = [];
quest: Question[];
add: Boolean = false;
addNew: string = '';
Criteria: Array<Question> =[] ;
  constructor(private dbConn: DatabaseService) { 
// this.Criteria = this.dbConn.getCriteria();
// console.log(this.Criteria);


// this.questions.push(
  //   { Question: 'How was the presentation? *' },
  //   { Question: 'Estimation Accuracy *' },
  //   { Question: 'Bug free *' },
  //   { Question: 'Efficiency *' },
  //   { Question: 'Overall impressions *' },)
            
  
  this.dbConn.getCriteria().subscribe(criteria => {        
            this.Criteria = criteria;

            console.log(criteria)
            });
  }

  ngOnInit() {
    

      // element.map(res => {
      //   this.questions.push(
      //     new Question(res)
      //   );

        // console.log(res. + "here")
      // })

      // console.log(this.questions + "here")
      

    // this.quest = this.questions.Questions;
    
  }

  delete(que){
    this.dbConn.deleteCriteria(que);
  }

  showAdd(state){
    this.add = state;
  }

  addCriteria(addNew){
    if(this.addNew == ''){
      alert('Really?!');
    }else {
      
      this.addNew = '';
      this.dbConn.createCriteria(addNew);

    }
    
  }

}
 