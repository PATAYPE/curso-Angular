export class Alumno {

    id: number;
    nombre: string ;
    apellido: string;
    ciclo: number;

    constructor(id: number, nombre: string, apellido: string, ciclo: number){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.ciclo=ciclo;
    }
}
