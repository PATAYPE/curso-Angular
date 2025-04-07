import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

/**
 * 
 * Configurando rutas para componente home
*/
const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
