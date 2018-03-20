import { Injectable } from '@angular/core';

@Injectable()
export class UiService {

  showTopNav: boolean = false;
  showBottomNav: boolean = false;
  showTeamRegistration: boolean = true;
  isManager: boolean = true;
  showSpinner: boolean = false;
  constructor() { }


  showTop(){
    return this.showTopNav;
  }

  showBottom(){
    return this.showBottomNav;
  }

  showTeamReg(){
    return this.showTeamRegistration;
  }

  showManager(){
    return this.isManager;
  }

  spinner(){
    return this.showSpinner;
  }
}
