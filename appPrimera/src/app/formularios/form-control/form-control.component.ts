import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  formUser = new FormGroup({
    'nombre': new FormControl('', [Validators.required ]),
    'correo':  new FormControl('', [Validators.required, Validators.email] )
  });

 
  nombre = new FormControl('', [Validators.required ]);
  correo  = new FormControl('', [Validators.required, Validators.email] );



  profileForm = new FormGroup({
    'firstName': new FormControl('', Validators.required ),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private fb: FormBuilder) {

   }

  formContacto = this.fb.group({
    'firstName': ['', Validators.required ],
    'email':  ['', [Validators.required, Validators.email]]
   })

  ngOnInit(): void {
  }

  updateName(){
    //this.name.setValue('Monica');
  }

  onSubmit() {
    console.warn(this.formContacto.value);
  }

   get getName(){
    return this.formContacto.get('firstName') as FormControl;
  }

  get getEmail(){
    return this.formContacto.get('email') as FormControl;
  }
}
