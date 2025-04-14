import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/articulo';
import { Presupuesto } from 'src/app/model/presupuesto';
import { ArticuloService } from 'src/app/service/articulo.service';

@Component({
  selector: 'app-list-ingresos',
  templateUrl: './list-ingresos.component.html',
  styleUrls: ['./list-ingresos.component.css']
})
export class ListIngresosComponent implements OnInit {

  ingresos: Presupuesto[];

  
  constructor(private articuloServices: ArticuloService) { 
  }

  ngOnInit(): void {
    this.ingresos=this.articuloServices.listIngresos;
  }

  totalIngresos(): number{
    let totalIngreso = this.articuloServices.totalIngresos();
    return totalIngreso;
  }

  eliminarArticulo(articulo: Articulo){
    this.articuloServices.removerArticulo.emit(articulo);
  }

}
