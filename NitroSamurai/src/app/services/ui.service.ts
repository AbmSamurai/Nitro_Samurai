import { Injectable } from '@angular/core';
import { Team } from '../models/Team';

@Injectable()
export class UiService {

  showTopNav: boolean = false;
  showBottomNav: boolean = false;
  showTeamRegistration: boolean = false;
  isManager: boolean = false;
  showSpinner: boolean = false;
  modalActive: boolean = false;
  modalSection: string = "";
  teamSection: string = "details";
  team:Team;
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

  showTeamReview(){
    return this.showTeamRegistration;
  }

  showManager(){
    return this.isManager;
  }

  spinner(){
    return this.showSpinner;
  }

  showModal(){
    return this.modalActive;
  }

  setModal(modalActive:boolean){
    this.modalActive = false;
  }


  getTeamSection(){
    return this.teamSection;
  }

  setModalSection(sectionName: string){
    this.modalSection = sectionName;
  }

  getModalSection(){
 
    return this.modalSection;
  }
}
