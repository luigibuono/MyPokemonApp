import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [

MatIconModule,
MatButtonModule,
MatChipsModule,
MatCardModule,
MatGridListModule,
MatMenuModule,
MatPaginatorModule,
MatInputModule,
MatFormFieldModule,
MatToolbarModule,
MatTableModule


  ],
  exports : [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule
  ]
 })

 export class MaterialModule {}

