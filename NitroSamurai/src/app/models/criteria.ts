export class Criteria{
  Question: Array<any[]>;

  constructor(ques){
      this.Question = ques.question;
  }
}

export class Question{
  Question: string;

  // constructor(ques){
  //     this.Question = ques;
  // }
}