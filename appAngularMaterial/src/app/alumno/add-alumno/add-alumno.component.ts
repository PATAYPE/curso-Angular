import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Alumno } from 'src/app/models/alumno';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent implements OnInit {

  id:number;
  nombre='';
  apellido='';
  ciclo='';

  tipoOperacion:number;
  accion='';

  constructor(
    private route : ActivatedRoute,
    private location: Location,
    private alumnoService: AlumnoService
  ) { 
   
    let idAlumno = Number(this.route.snapshot.paramMap.get('id'));
    this.operar(idAlumno);
    
  }

  ngOnInit(): void {
  }

  operar(idAlumno: number){

    if( idAlumno > 0 ){
      this.iniciarFormulario(Number(idAlumno));
      this.accion='Modificar';
    }else{
      this.id = idAlumno;
      this.accion='Registrar';
    }
  }

  iniciarFormulario(idAlumno:number){
    let alumno = this.alumnoService.getByd(idAlumno);
    this.id= idAlumno;
    this.nombre= alumno.nombre;
    this.apellido= alumno.apellido;
    this.ciclo = alumno.ciclo.toString();
  }

  realizarAccion(){
    if(this.id>0){
      this.modificar();
    }else{
      this.registrar();
    }
  }

  registrar(){
    let idAlumno = this.alumnoService.getListSize();
    let alumno = new Alumno( idAlumno, this.nombre, this.apellido, Number(this.ciclo) );
    this.alumnoService.save(alumno);
  }

  modificar(){
    debugger;
    let alumno = new Alumno( this.id, this.nombre, this.apellido, Number(this.ciclo) );
    this.alumnoService.update(alumno).subscribe( resp => {
      debugger;
      console.log(resp);
    })
  }


  limpiarFormulario(){
    this.nombre='';
    this.apellido='';
    this.ciclo='';
  }


  goBack(): void {
    this.location.back();
  }

}
