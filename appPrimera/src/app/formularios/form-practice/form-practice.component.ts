import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.scss']
})
export class FormPracticeComponent implements OnInit {


  powers = ['Realy Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];

  hero = new Hero(10,'Jose Raul', this.powers[1], 'Chuck Oversize');
  
  formHero = this.fb.group({
    'name':['Jose Raul', [Validators.required]]
  });

  // construyendo FormGroup
  heroFormGroup = new FormGroup({
    'name' : new FormControl('Juancito', [Validators.required])
  });

  // construyendo un form Control Basico

  nombre = new FormControl('', Validators.required);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }


}
