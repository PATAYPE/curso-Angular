import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  empleado:Empleado;
  empleados:Empleado[] = [];
  nombre: string ="";
  apellido: string = "";

  isRegistrado: boolean = true;

  isHabilitado:boolean=true;

  miParrafo:string="miParrafo";

  edad=25;


  flagMiClase=true;

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    let empleadoNuevo: Empleado = new Empleado();

    empleadoNuevo.nombre = this.nombre;
    empleadoNuevo.apellido = this.apellido;
    this.empleados.push(empleadoNuevo);
    this.isRegistrado=false;
  }

  listarEmpleados(){

  }

  ejecutarBoton(){
    alert('ok');
  }

}
