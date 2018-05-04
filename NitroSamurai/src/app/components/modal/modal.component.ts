import { Component, OnInit, Input} from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Team } from '../../models/Team';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input("team") team: Team;
  
  constructor(protected ui:UiService, protected cache: CacheService) {}

  ngOnInit() {
   
  }

  

}
