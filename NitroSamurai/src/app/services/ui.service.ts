import { Injectable } from '@angular/core';

@Injectable()
export class UiService {

  showTopNav: boolean = false;
  showBottomNav: boolean = false;

  constructor() { }


  showTop(){
    return this.showTopNav;
  }

  showBottom(){
    return this.showBottomNav;
  }
}
