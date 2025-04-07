import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent implements OnInit {

  isRegistrado = false;

  constructor() { }


  ngOnInit(): void {
  }

  mostrarConsola(name : string){
    console.log("hola " + name);
    this.isRegistrado = true;
  }

}
