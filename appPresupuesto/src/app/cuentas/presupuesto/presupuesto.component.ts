import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/articulo';
import { Presupuesto } from 'src/app/model/presupuesto';
import { ArticuloService } from 'src/app/service/articulo.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  presupuesto; 

  tingresos: number=0;
  tegresos: number=0;

  constructor(private articuloService: ArticuloService) { 
    this.articuloService.emitirIngreso.subscribe(
      (articulo:Articulo) => {
         if(articulo.tipo === 1){ this.agregarIngreso(articulo) ;}
         if( articulo.tipo === 2 ){ this.agregarEgreso(articulo) ;}
         this.cargarPresupuesto();
      }
    );


    this.articuloService.removerArticulo.subscribe(
      (articulo: Articulo) => {
        debugger;
        if(articulo.tipo === 1){  
          let indice = this.articuloService.getIndexIngreso(articulo);
          this.articuloService.removerIngreso(indice) 
        }
        if(articulo.tipo === 2){  
          let indice = this.articuloService.getIndexEgreso(articulo);
          this.articuloService.removerEgreso(indice) ;
        }
        this.cargarPresupuesto();
      }
    )

    
  }

  ngOnInit(): void {
    this.cargarPresupuesto();
  }

  agregarIngreso(articulo: Articulo){
    this.articuloService.agregarIngreso(articulo);
  }

  agregarEgreso(articulo: Articulo){
    this.articuloService.agregarEgreso(articulo);
  }

  cargarPresupuesto() :void{
    this.tingresos= this.articuloService.totalIngresos();
    this.tegresos = this.articuloService.totalEgresos();
    let tPresupuesto = this.tingresos - this.tegresos;
    this.presupuesto = new Presupuesto(tPresupuesto);
  }

}
