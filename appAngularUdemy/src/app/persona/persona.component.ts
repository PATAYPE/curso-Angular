import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  nombre='Juan';
  apellido='Perez';
  edad='28';

  mensaje='No se ha agregado ninguna persona'

  titulo= 'Medico';
  isHabilitado= false;
  isHabilitadoMensaje = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarTexto(texto: string){
    console.log(texto);
  }

  agregarPersona(){
    this.isHabilitadoMensaje=false;
    this.mensaje='Se agrego una persona';
  }
}
