import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  

  @Input() cursos: Curso[];
  @Output() cursoEmitter = new EventEmitter<Curso>();

  

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos(){
    this.cursos = this.cursoService.listCursos();
  }


  eliminarCurso(curso: Curso){
    this.cursoService.eliminarCursos(curso);
  }

  irModificarCurso(cu: Curso){
    let cursoBD = this.cursoService.getCursoById(cu);
    this.cursoEmitter.emit(cursoBD);
  }

  modificarCurso(curso: Curso){
    this.cursoService.modificarCurso(curso);
    this.listarCursos();
  }

 

}
