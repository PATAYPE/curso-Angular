export class Student {

    id:number;
    name:string;
    lastName:string;
    codigo:string;
    correo:string;
    ciclo:string;
    estado:number;
    sexo:string;

    

    constructor(id:number, name:string, lastName:string, codigo:string, correo:string, ciclo:string, enabled:number,sexo:string){

        this.id=id;
        this.name=name;
        this.lastName=lastName;
        this.codigo=codigo;
        this.correo=correo;
        this.ciclo = ciclo;
        this.estado=enabled;
        this.sexo=sexo;
    }
}
