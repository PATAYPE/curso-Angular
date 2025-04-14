import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    ListAlumnoComponent,
    AddAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AlumnoModule { }
