import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, 
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [ // Make sure to export the modules so they can be used in other modules or components
    CommonModule,
    RouterModule, 
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
