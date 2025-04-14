import { Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../servicios/logging.service';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  nombre:string='';
  apellido:string='';
  

  @ViewChild('nombreInput') nombreIn : ElementRef;
  @ViewChild('apellidoInput') apellidoInput : ElementRef;

  constructor( 
    private personaService: PersonaService
    ) {
    this.personaService.saludar.subscribe(
      (indice:number) => alert("el indice es: " + indice)
    );
  }

  ngOnInit(): void {
  }

  registrarPersona(){
      let persona= new Persona(this.nombre , this.apellido);
      this.personaService.agregarPersona(persona);
  }

}
