import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos: Curso[] = [
    { id:1, nombre:"java"},
    { id:2, nombre: "PHP"},
    { id:3, nombre: "C++"}
  ];

  constructor() { }

  addCursos(curso:Curso){
    this.cursos.push(curso);
  }

  listCursos(): Curso[] {
    return this.cursos;
  }

  eliminarCursos(curso : Curso) {
    this.cursos.forEach( (item,index)=>{
      if(item.id === curso.id)  { return this.cursos.splice(index,1 ); }
    })
  }

  existeElemento(curso: Curso) :boolean{
    return this.cursos.includes(curso)
  }

  retornarPosicionElemento(curso: Curso) :number {
    return this.cursos.map(c => {return c.id}).indexOf( curso.id );
  }

  modificarCurso(curso: Curso){
    let indice = this.retornarPosicionElemento(curso);
    this.cursos[indice].nombre= curso.nombre;
  }

  getCursoById(curso:Curso): Curso {
    return this.cursos.find( cu => { return cu.id == curso.id;})
  }

}
