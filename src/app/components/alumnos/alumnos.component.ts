import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {

  listaAlumnos!:Array<Alumno>;

  //TODO: QUIERO CARGAR LA LISTA DE ALUMNOS
  //y que se muestre en el componente

  constructor (private alumnoService:AlumnoService)
  {
    this.listaAlumnos = [];

    
    
  }
  
  ngOnInit(): void {
    //HTTP
    this.alumnoService.leerTodosLosAlumnosDelServidor().subscribe({
      next: (alumnos:Array<Alumno>) => {
        this.listaAlumnos = alumnos; 
      },
      error:(error) => {
        console.log(error)
      },
      complete: () =>{
        console.log("Ok")
      }
    })
  }







}
