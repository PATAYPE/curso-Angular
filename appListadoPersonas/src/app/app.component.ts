import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './servicios/persona.service';
import { LoggingService } from './servicios/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Listado de Personas';

  personas: Persona[] = [];

  constructor(
    
    private personaService: PersonaService){

  }

  ngOnInit(): void {
    this.personas=this.personaService.personas;
  }

}
