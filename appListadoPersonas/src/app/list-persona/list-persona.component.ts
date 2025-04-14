import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {


  @Input() persona: Persona;
  @Input() indice : number;

  constructor(
    private personaService : PersonaService
  ) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.indice);
  }


}
