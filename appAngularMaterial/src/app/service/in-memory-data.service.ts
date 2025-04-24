import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  alumnos : Alumno[] = [
    new Alumno( 1,  'Luis Raul', 'Romero Reyes', 10),
    new Alumno( 2,  'Alan Omar', 'Hilario Huitron', 6),
    new Alumno( 3,  'Jose Raul', 'Cruz Ojeda', 4),
    new Alumno( 4,  'Cristhian', 'Santos Davila', 10),
    new Alumno( 5,  'Vladimir', 'Minaya Motta', 4),
    new Alumno( 6,  'Luis', 'Muñoz Rodas', 6),
    new Alumno( 7,  'Andres', 'Cortez Toribio', 6),
    new Alumno( 8,  'Reynaldo', 'Cavero Rosales', 10),
    new Alumno( 9,  'Luis Miguel', 'Sanchez Sangay', 10),
    new Alumno( 10,  'Nestor', 'Canales Gamboa', 10),
    new Alumno( 11,  'Peter', 'Espinoza Gomez', 9)
  ];

  createDb() {
      return { alumnos: this.alumnos };
  }

  getAllItems(reqInfo: any): Observable<any> {
    const items = this.alumnos;
    return reqInfo.utils.createResponse$(() => ({
      body: items,
      status: 200,
    }));
  }

}
