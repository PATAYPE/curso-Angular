import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.scss']
})
export class FormReactivoComponent implements OnInit {


  /* profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  }); */

  powers = ['Realy Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];
  
  hero = new Hero(18, 'Jose Raul', this.powers[2] , 'Chuck Oversize');

  profileForm: any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      name: [ this.hero.name , [Validators.required, Validators.minLength(4), this.forbiddenNameValidator(/bob/i) ] ],
      lastName: [''],
      altergo: [this.hero.alterEgo, [Validators.required, Validators.minLength(4)] ],
      power: [this.hero.power,[Validators.required]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get name() { return this.profileForm.get('name'); }

  get power() { return this.profileForm.get('power'); }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
}
