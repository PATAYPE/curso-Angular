import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';


const routes: Routes = [
  {
    path:'',
    component: AddAlumnoComponent
  },
  {
    path: 'listar',
    component: ListAlumnoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnoRoutingModule { }
