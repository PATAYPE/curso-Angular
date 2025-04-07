import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() mensaje?:string

  @Output() mensajeChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirMensaje(){
    this.mensajeChange.emit(this.mensaje);
  }

}
