import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  nombres = "juan";
  apellidos = "pildoras";
  private edad = 21;
  empresa = "pildoras informaticas";
  chkRegistrado = false;

  isHabilitado = false;



  empleado:Empleado;
  empleados:Empleado[] = [];
  nombre: string ="";
  apellido: string = "";

  isRegistrado: boolean = true;

  mensajeAHijo = "pruebaxx";

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    return this.edad;
  }

  llamarEmpresa(empresa:string){
    //console.log(empresa)
  }

  verElemento(element: any){
   // console.dir(element);
  }

  registrarUsuario(event : Event ){
    if ((event.target as HTMLInputElement).value === "si"){
      //this.isRegistrado = "se Registro";
    }else{
      //this.isRegistrado = "no Registrado";
    }
  }

  registrar(){
    let empleadoNuevo: Empleado = new Empleado();

    empleadoNuevo.nombre = this.nombre;
    empleadoNuevo.apellido = this.apellido;
    this.empleados.push(empleadoNuevo);
    this.isRegistrado=false;
  }

  enviarMensajeAHijo(mensaje:string){
    //debugger;
    //let mensajeToChild= (event.target as HTMLInputElement).value;
    //this.messageToChild = mensajeToChild;
    //console.log(this.messageToChild);
    this.mensajeAHijo=mensaje;
  }

 
}
