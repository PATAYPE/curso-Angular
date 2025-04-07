import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {


  num1:number = 0;
  num2:number = 0;

  resultado : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  operacion(event : Event){
    
    console.log(event.target as HTMLSelectElement);

    let operacion = (event.target as HTMLSelectElement).value
    
    if(operacion === "+"){
      this.resultado = Number(this.num1) + Number(this.num2);
    }

    if(operacion === "-"){
      this.resultado = Number(this.num1) - Number(this.num2);
    }

    if(operacion === "*"){
      this.resultado = Number(this.num1) * Number(this.num2);
    }

    if(operacion === "/"){
      this.resultado = Number(this.num1) /Number(this.num2);
    }
    

  }
  

}
