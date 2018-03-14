import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,MatTabsModule,MatIconModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
  ],
  exports:[
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
  ]

})
export class MaterialDesignModule { }
