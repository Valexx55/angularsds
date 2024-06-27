export class Alumno {

    id:number;
    nombre:string;
    apellido:string;
    email:string;
    creadoEn:string;
    edad:number;
    fotoHashCode!:number;


    constructor() {
        this.id = 0;
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.creadoEn = '';
        this.edad = 0;
    }
}
