import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  //@Input() empleadosHijos: Empleado;
  @Input() messageChild !:string;
  @Output() messageToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarMessageToParent(){
    debugger;
    this.messageChild = this.messageChild;
    this.messageToParent.emit(this.messageChild);
  }

}
