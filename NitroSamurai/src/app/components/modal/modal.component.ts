import { Component, OnInit, Input} from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input("team") team: Team;
  
  constructor(protected ui:UiService) {}

  ngOnInit() {
   
  }

}
