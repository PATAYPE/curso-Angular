import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/articulo';
import { ArticuloService } from 'src/app/service/articulo.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  operacion: string='';
  nombre: string='';
  precio: string='';

  constructor(private articuloService : ArticuloService) {
  }

  ngOnInit(): void {

  }

  realizarOperacion(event: Event){
    let operacion = (event.target as HTMLSelectElement).value;

    if(operacion=== '1'){
      // entonces agregar a ingresos
      let ingreso = new Articulo(this.nombre, Number(this.precio) , 1 );
      this.articuloService.emitirIngreso.emit(ingreso);
    }

    if(operacion === '2'){
      // agregar a egresos
      let egreso = new Articulo( this.nombre, Number(this.precio), 2 );
      
      this.articuloService.emitirIngreso.emit(egreso);
    }

  }


}
