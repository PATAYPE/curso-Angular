import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnosUrl = 'listar/alumnos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ELEMENT_DATA: Alumno[] = [
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

  constructor(
    private http:  HttpClient
  ) { }

  listAll(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.alumnosUrl);
  }

  save(alumno: Alumno) : Observable<any>{
    /*this.ELEMENT_DATA.push(alumno);
    console.log(this.ELEMENT_DATA);*/
    return this.http.post<Alumno>(this.alumnosUrl, alumno, this.httpOptions).pipe( map( resp => (  { resp, mensaje:"ok"}) ));
  }


  getListSize():number{
    return this.ELEMENT_DATA.length+1;
  }


  getByd(id: number): Observable<any>{
    //return  this.ELEMENT_DATA.find( el => { return el.id == id} );
    const uri = `${this.alumnosUrl}/${id}`;
    return this.http.get<Alumno>(uri);/*.pipe(
      map(resp => resp )
    );*/
  }


  getIndexByAlumno(alumno: Alumno):number{
    return this.ELEMENT_DATA.findIndex( el => { return el.id === alumno.id });
  }


  delete(alumno: Alumno):Observable<any>{
    let uri = `${this.alumnosUrl}/${alumno.id}`;
    return this.http.delete<Alumno>(uri, this.httpOptions).pipe( map( resp => { resp; console.log(resp); } ));
  }


  update(alumno:Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(this.alumnosUrl, alumno, this.httpOptions);/*.pipe(
      map( respuesta => respuesta)
    );*/
  }

}


