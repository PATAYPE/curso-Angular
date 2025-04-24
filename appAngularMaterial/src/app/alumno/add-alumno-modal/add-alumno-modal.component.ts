import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-add-alumno-modal',
  templateUrl: './add-alumno-modal.component.html',
  styleUrls: ['./add-alumno-modal.component.css']
})
export class AddAlumnoModalComponent implements OnInit {

  tipoOperacion:number;
  accion='';

  idAlumno:number;
  nombre='';
  apellido='';
  ciclo:number;

  constructor(
    private alumnoService: AlumnoService,
    public dialogRef: MatDialogRef<AddAlumnoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno) {

  }

  ngOnInit(): void {
      this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.nombre = this.data.nombre;
    this.apellido = this.data.apellido;
    this.ciclo = this.data.ciclo;
    this.idAlumno = this.data.id;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  registrar(){
    let idAlumno = this.alumnoService.getListSize();
    //let alumno = new Alumno( idAlumno, this.nombre, this.apellido, Number(this.ciclo) );
    //this.alumnoService.save(alumno);
  }

  enviar(){
  
    let alumno = new Alumno(this.idAlumno, this.nombre, this.apellido, this.ciclo);
    let peticion: Observable<Alumno>;
    peticion = this.alumnoService.update(alumno);
    peticion.subscribe( resultado => {
        this.dialogRef.close();
    });


  }
}
