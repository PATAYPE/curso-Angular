import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private location: Location
  ) { 

    const idAlumno = this.route.snapshot.paramMap.get('id');

    console.log(idAlumno);
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
