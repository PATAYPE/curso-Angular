import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Configurando con rutas loadchildren
 */
const routes : Routes =[
  {
    path: '',
    loadChildren: ()=> import('./landing/landing.module').then(p=>p.LandingModule)
  },{
    path: 'products',
    loadChildren: ()=> import('./products/products.module').then(p=>p.ProductsModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ 
    RouterModule
  ]
})
export class AppRoutingModule { }
