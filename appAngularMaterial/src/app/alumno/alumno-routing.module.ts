import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';


const routes: Routes = [
  {
    path: '',
    component : ListAlumnoComponent
  },
  {
    path: 'nuevo/:id',
    component: AddAlumnoComponent
  },{
    path: 'editar/:id',
    component: AddAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
