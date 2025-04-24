import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { TIPOACCTONCRUD } from 'src/app/enums/TIPOACCIONCRUD';
import { Alumno } from 'src/app/models/alumno';
import { ParametroDialogo } from 'src/app/models/parametro-dialogo';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-add-alumno-modal',
  templateUrl: './add-alumno-modal.component.html',
  styleUrls: ['./add-alumno-modal.component.css']
})
export class AddAlumnoModalComponent implements OnInit {


  

  idAlumno:number;
  nombre='';
  apellido='';
  ciclo:number;

  alumno: Alumno;
  accion='';

  constructor(
    private alumnoService: AlumnoService,
    public dialogRef: MatDialogRef<AddAlumnoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ParametroDialogo<Alumno,Alumno> ) {

      this.accion = TIPOACCTONCRUD[this.data.accion];
  }

  ngOnInit(): void {
      this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.alumno = this.data.objecto;
    this.idAlumno = this.alumno.id;
    this.nombre=this.alumno.nombre;
    this.apellido=this.alumno.apellido;
    this.ciclo=this.alumno.ciclo;
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
