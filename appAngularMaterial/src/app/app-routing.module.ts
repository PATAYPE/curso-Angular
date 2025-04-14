import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes : Routes =[
  
  {
    path: 'listar',
    loadChildren: ()=> import('./alumno/alumno.module').then(p=>p.AlumnoModule)
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path : '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
   PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
