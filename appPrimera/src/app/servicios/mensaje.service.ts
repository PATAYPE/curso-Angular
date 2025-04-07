import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  messages: string[] = ['java','python','R'];


  constructor() { }

  addMessages(message:string){
    this.messages.push(message);
  }

  listMessages(): string[] {
    return this.messages;
  }

  eliminarMessage(mensaje :string) {
    this.messages.forEach( (item,index)=>{
      if(item === mensaje)  { return this.messages.splice(index,1 ); }
    })
  }

  existeElemento(curso: string) :boolean{
    return this.messages.includes(curso)
  }

  retornarPosicionElemento(curso: string) :number {
    return this.messages.indexOf(curso);
  }

  modificarElemento(curso:string, indice: number){
    this.messages[indice] = curso;
  }

}
