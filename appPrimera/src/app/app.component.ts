import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola Mundo Angular¡';

  fontSizePx = "";

  mensajePadre="";

  nombreCurso="";

  indexCurso = "";

  tipoAccion= "1";


  ngOnInit(): void {
    console.log('inicia appcomponent');
  }

  cargarObjectoCurso(value : any){
   /* this.indexCurso=objectoCurso.index;
   this.nombreCurso=objectoCurso.value;
   this.tipoAccion=objectoCurso.tipo; */
   this.tipoAccion=value;
   console.log(this.tipoAccion);
  }

  limpiarControles(){
   
  }

}
