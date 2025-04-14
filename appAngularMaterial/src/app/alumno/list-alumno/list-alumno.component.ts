import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent implements OnInit {

  ELEMENT_DATA: Alumno[] = [
      new Alumno( 1,  'Luis Raul', 'Romero Reyes', 10),
      new Alumno( 2,  'Alan Omar', 'Hilario Huitron', 6),
      new Alumno( 3,  'Jose Raul', 'Cruz Ojeda', 4),
      new Alumno( 4,  'Cristhian', 'Santos Davila', 10),
      new Alumno( 5,  'Vladimir', 'Minaya Motta', 4),
      new Alumno( 6,  'Luis', 'Muñoz Rodas', 6),
      new Alumno( 7,  'Andres', 'Cortez Toribio', 6),
      new Alumno( 8,  'Reynaldo', 'Cavero Rosales', 10),
      new Alumno( 9,  'Luis Miguel', 'Sanchez Sangay', 10),
      new Alumno( 10,  'Nestor', 'Canales Gamboa', 10),
      new Alumno( 11,  'Peter', 'Espinoza Gomez', 9)
    ];

  displayedColumns: string[] = ['nombre', 'apellido', 'ciclo', 'accion'];
  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.paginator= this.paginator;
  }


  irEditar(alumno: Alumno){
    alert('el alumno :' + alumno.nombre + ' sera editar');
  }

  irEliminar(alumno: Alumno){
    alert('el alumno: '+ alumno.nombre+ ' sera eliminado');
  }

}
