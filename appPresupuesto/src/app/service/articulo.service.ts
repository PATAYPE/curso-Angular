import { EventEmitter, Injectable } from '@angular/core';
import { Articulo } from '../model/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  listIngresos: Articulo[]=[
    new Articulo('LapTop', 2500,1),
    new Articulo('Guitarra', 800,1),
    new Articulo('Venta Coche', 400,1)
  ];

  listEgresos: Articulo[] = [
    new Articulo('Renta Dpto', 700,2),
    new Articulo('Ropa', 120,2)
  ];

  emitirIngreso = new EventEmitter<Articulo>();

  removerArticulo = new EventEmitter<Articulo>();

  constructor() { 
  }

  agregarIngreso(articulo: Articulo){
    this.listIngresos.push(articulo);
  }

  removerIngreso(indice: number){
    this.listIngresos.splice(indice,1);
  }

  totalIngresos():number{
    return this.listIngresos.reduce((suma, element) => suma+= element.monto, 0 );
  }

  totalEgresos(){
    return this.listEgresos.reduce((suma, element) => suma+= element.monto, 0 );
  }

  agregarEgreso(articulo: Articulo){
    this.listEgresos.push(articulo);
  }

  removerEgreso(indice: number){
    this.listEgresos.splice(indice,1);
  }

  getIndexIngreso(articulo:Articulo): number{
    return this.listIngresos.map( a => { return a.nombre}).indexOf(articulo.nombre);
  }

  getIndexEgreso(articulo:Articulo): number{
    return this.listEgresos.map( a => { return a.nombre}).indexOf(articulo.nombre);
  }

}
