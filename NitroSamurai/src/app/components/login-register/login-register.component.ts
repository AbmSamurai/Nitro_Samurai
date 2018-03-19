import { Component, OnInit } from '@angular/core';
import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(protected ui: UiService) {
    ui.showTopNav = false;
  }

  ngOnInit() {
  }

}
