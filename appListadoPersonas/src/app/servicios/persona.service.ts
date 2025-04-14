import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [
       new Persona( 'juan', ' perez'),
       new Persona( 'Luara', ' Juarez')
  ];

  saludar = new EventEmitter<Number>();
    
  constructor( 
    private logginService: LoggingService
  ) { 

  }

  agregarPersona(persona: Persona){
    this.logginService.enviarMensajeAConsola("agregamos persona : " + persona.nombre);
    this.personas.push(persona);
  }
}
