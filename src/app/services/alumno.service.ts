import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { RUTA_SERVIDOR_ALUMNOS } from '../config/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//ESTA CLASE, ES LA QUE SE COMUNICA CON EL SERVIDOR
//PARA HACER LAS OPERACIONES CRUD
//GET - LEER / CONSULTA
//POST - CREAR 
//PUT - MODIFICAR
//DELETE - BORRAR


export class AlumnoService {

  ruta_servidor:string = RUTA_SERVIDOR_ALUMNOS;
  cabecera!: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.cabecera = new HttpHeaders({'Content-type': 'application/json'});
   }


  leerTodosLosAlumnosDelServidor ()
  {

  }

  leerUnAlumnosDelServidor (numeroAlumno:number)
  {
    
  }

  crearAlumnoEnElServidor (alumnoNuevo:Alumno): Observable<Alumno>
  {
    return this.httpClient.post<Alumno>(this.ruta_servidor, alumnoNuevo, {headers: this.cabecera});
  }

  modificarAlumnoEnElServidor (alumnoModificado:Alumno)
  {

  }

  borrarAlumnoDelServidor (numeroAlumno:number)
  {

  }
}
