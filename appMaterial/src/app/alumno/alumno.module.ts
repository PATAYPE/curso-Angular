import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    ListAlumnoComponent,
    AddAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    MatSlideToggleModule,
    MatButtonModule 
  ]
})
export class AlumnoModule { }
