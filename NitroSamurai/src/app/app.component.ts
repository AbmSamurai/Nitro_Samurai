import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { CacheService } from './services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';

  constructor(protected ui:UiService, protected cache: CacheService){

  }
}
