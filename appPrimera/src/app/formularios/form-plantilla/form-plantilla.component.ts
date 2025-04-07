import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { Hero } from 'src/app/models/hero';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.scss']
})
export class FormPlantillaComponent implements OnInit {

  powers = ['Realy Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];

  hero = new Hero(18,'Dr. IQ', this.powers[2] , 'Chuck Oversize');

  submitted = false;

  ciclos = ['1','2','3','4','5','6','7','8','9','10'];

  student = new Student(10, "Alan", "Huitron", "2011200100", "alan@gmail.com",this.ciclos[5], 1,'1');

  estudiante = null;
  
  constructor() { }

  ngOnInit(): void {
    this.estudiante = new Estudiante();
  }

  onSubmit(formValue:any) { 
    this.submitted = true; 
    console.log('form enviado');
    console.log(formValue);
  }

  registrarStudiante(){
    
  }

  isValido= false;
  aceptarTerminos(isvalid:number){
    debugger;
   if(isvalid==1){
    this.isValido = true;
   }else{
    this.isValido = false;
   }  
  }
}
