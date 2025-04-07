import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { CursoListComponent } from '../curso-list/curso-list.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styles: [
  ]
})
export class CursoAddComponent implements OnInit {

  @Input() tipoAccion !: string;
  @ViewChild('childCursoList') childListaCursos !: CursoListComponent;

  idCurso: number = 0;
  nombreCurso !: string;

  cursos: Curso[] = [];
  curso: Curso;

  formCurso: any;

  constructor(private cursoService: CursoService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.iniciarFormulario();


  }

  iniciarFormulario() {
    this.curso = new Curso();
    this.curso.id = 0;
    this.curso.nombre = '';

    this.formCurso = this.fb.group({
      id: [this.curso.id],
      nombre: [this.curso.nombre]
    })
  }

  operar() {
    let id = this.formCurso.get('id').value;
    let nombre = this.formCurso.get('nombre').value;

    let cursoNuevo = new Curso();
    cursoNuevo.id = id;
    cursoNuevo.nombre = nombre;

    if (cursoNuevo.id === 0) {
      this.registrarCurso(cursoNuevo);
    } else {
      this.modificarCurso(cursoNuevo);
    }
    this.limpiarFormulario();
  }

  registrarCurso(curso: Curso) {
    this.cursoService.addCursos(curso);
    this.formCurso.reset();
  }

  /* irModificarCurso(cu: Curso){
    let cursoBD = this.cursoService.getCursoById(cu);
    this.curso.nombre = cursoBD.nombre;
    this.curso.id = cursoBD.id;
  } */

  modificarCurso(curso: Curso) {
    this.cursoService.modificarCurso(curso);
    this.formCurso.reset();
  }

  cargarFormulario(curso: Curso) {
    debugger;
    //this.curso = curso;
    this.formCurso = this.fb.group({
      id: [curso.id],
      nombre: [curso.nombre]
    })
  }

  limpiarFormulario(){
    this.formCurso.reset({
      id: 0,
      nombre: ''
    })
  }

}
