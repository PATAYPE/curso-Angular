import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/articulo';
import { ArticuloService } from 'src/app/service/articulo.service';

@Component({
  selector: 'app-list-egresos',
  templateUrl: './list-egresos.component.html',
  styleUrls: ['./list-egresos.component.css']
})
export class ListEgresosComponent implements OnInit {

  egresos: Articulo[]=[];
  porcentajeEgreso : number ;

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.egresos = this.articuloService.listEgresos;
  }

  getTotalEgresos():number{
    let totalEgreso = this.articuloService.totalEgresos();
    return totalEgreso;
  }

  eliminarArticulo(articulo: Articulo){
    this.articuloService.removerArticulo.emit(articulo);
  }

}
