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

            
  
  this.dbConn.getCriteria().subscribe(criteria => {        
            this.Criteria = criteria;

            });
  }

  ngOnInit() {
    

    
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
 