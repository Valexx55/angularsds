import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

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

  constructor(private httpClient: HttpClient) { }


  leerTodosLosAlumnosDelServidor ()
  {

  }

  leerUnAlumnosDelServidor (numeroAlumno:number)
  {
    
  }

  crearAlumnoEnElServidor (alumnoNuevo:Alumno)
  {

  }

  modificarAlumnoEnElServidor (alumnoModificado:Alumno)
  {

  }

  borrarAlumnoDelServidor (numeroAlumno:number)
  {

  }
}
