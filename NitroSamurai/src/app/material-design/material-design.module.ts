import { NgModule } from '@angular/core';
import {MatToolbarModule,MatTabsModule,MatIconModule, MatFormFieldModule, ErrorStateMatcher,MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ]

})
export class MaterialDesignModule { }
