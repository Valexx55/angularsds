import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-alumno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent {

  alumno:Alumno;

  nalumnos!:number;


  router:Router = inject(Router);//este objeto me permite enrutar programaticamente

  constructor(private alumnoService:AlumnoService) {
    this.alumno = new Alumno();
  }

  estiloBoton():string
  {
    let estilo:string = '';

      estilo = 'btn btn-primary'

    return estilo;

  }

  crearAlumno()
  {
    console.log("en crearAlumno ");
    this.alumnoService.leerTodosLosAlumnosDelServidor().subscribe({
      next: (lista) => {
        this.nalumnos = lista.length;
        this.alumno.id = this.nalumnos+1;
        this.alumnoService.crearAlumnoEnElServidor(this.alumno).subscribe(
          {
            next: (alumnoNuevo:Alumno) => {
              console.log("Alumno insertado correctamente en el servidor");
              //una vez que se cree el alumno, nos dirigimos al listao /alumnos
              this.router.navigateByUrl("/alumnos");
            } , 
            error: (error) => {
              console.log("Error " + error);
            },
            complete: () => {
              console.log("Comunicación completada");
            }
    
          }
        )
      }
    })  
  }
}
