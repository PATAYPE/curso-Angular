import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddAlumnoModalComponent } from '../add-alumno-modal/add-alumno-modal.component';
import { ParametroDialogo } from 'src/app/models/parametro-dialogo';
import { TIPOACCTONCRUD } from 'src/app/enums/TIPOACCIONCRUD';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent implements OnInit {

  /* ELEMENT_DATA: Alumno[] = [
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
    ]; */

  
  displayedColumns: string[] = ['nombre', 'apellido', 'ciclo', 'accion'];
  dataSource = new MatTableDataSource<Alumno>();

  totalRegistros = 11;
  totalPorPagina = 5;
  paginaActual = 0;
  pageSize:number [] = [5, 10, 25, 100];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    public dialog: MatDialog,
    private alumnoService : AlumnoService) { 
  }

  ngOnInit(): void {
    this.listAlumnos();

    this.totalRegistros = 11;
    this.totalPorPagina = 5;
    this.paginaActual = 0;
    this.pageSize = [5, 10, 25, 100];
  }


  listAlumnos():void {
    
    this.alumnoService.listAll().subscribe(
      data => {
        
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;

        /*this.dataSource.paginator.length= this.totalRegistros;
        this.dataSource.paginator.pageSize = this.totalPorPagina;
        this.dataSource.paginator.pageSizeOptions = this.pageSize;
        */
      },
      err => console.log(err)
      // () => console.log('yayy')
    );
  }


  irEditar(alumno: Alumno){
    alert('el alumno :' + alumno.nombre + ' sera editar');
  }

  
  irEliminar(alumno: Alumno){
    this.alumnoService.delete(alumno).subscribe( resp => {
      console.log(resp);
    });
    this.listAlumnos();
  }

  
  openDialog():void{

    const alumnoNuevo =  new Alumno(0,'','', 0 );

    const dialogRef = this.dialog.open(AddAlumnoModalComponent, {
      width: '450px',
      data: { alumno: alumnoNuevo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  operar(alumno : Alumno){

    let parametroDialogo = new ParametroDialogo<Alumno,Alumno>();
    

    let alumnoModal;
    if(alumno!=null ){
      
      parametroDialogo.objecto = alumno;
      parametroDialogo.accion = TIPOACCTONCRUD.MODIFICAR;
    }else{

      parametroDialogo.objecto = new Alumno(0,'','',0);
      parametroDialogo.accion = TIPOACCTONCRUD.CREAR;
    }
  
    const dialogRef = this.dialog.open(AddAlumnoModalComponent, {
      width: '450px',
      data: parametroDialogo 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log( result );
      //console.log('The dialog was closed');
      //this.animal = result;
      this.listAlumnos();
    });

  }
}
