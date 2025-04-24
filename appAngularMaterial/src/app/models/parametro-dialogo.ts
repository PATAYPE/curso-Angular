import { TIPOACCTONCRUD } from "../enums/TIPOACCIONCRUD";

export class ParametroDialogo<T,U> {

    accion: TIPOACCTONCRUD;
    objecto : T;
    objetoReferencia?: U;
    
}
