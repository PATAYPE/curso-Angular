import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlumnoComponent } from './alumno/add-alumno/add-alumno.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'nuevo',
    loadChildren: ()=> import('./alumno/alumno.module').then(p => p.AlumnoModule)
  },
  {
    path:'',
    redirectTo:'nuevo',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
