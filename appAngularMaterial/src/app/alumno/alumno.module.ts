import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule } from '@angular/forms';
import { AddAlumnoModalComponent } from './add-alumno-modal/add-alumno-modal.component';


@NgModule({
  declarations: [
    ListAlumnoComponent,
    AddAlumnoComponent,
    AddAlumnoModalComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  providers:[
   
  ]
})
export class AlumnoModule { }
