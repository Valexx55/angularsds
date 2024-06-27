import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, RouterLink, FontAwesomeModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {

  listaAlumnos!:Array<Alumno>;
  //faCoffee = faCoffee;

  ic_editar = faEdit;
  ic_papelera = faTrashAlt;

  //TODO: QUIERO CARGAR LA LISTA DE ALUMNOS
  //y que se muestre en el componente

  constructor (private alumnoService:AlumnoService, private router:Router)
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



  editarAlumno(alumnoAEditar:Alumno)
  {
    console.log(` editarAlumno  id = ${alumnoAEditar.id}`);
    this.router.navigate(['/alumno/form/edit', alumnoAEditar.id]);
  }

  eliminarAlumno(alumnoABorrar:Alumno)
  {
   
    console.log(` eliminarAlumno  id = ${alumnoABorrar.id}`);

    if (confirm('Estás seguro que quieres borrar al alumno'))
      {
        this.alumnoService.borrarAlumnoDelServidor(alumnoABorrar.id).subscribe(
          {
            next: (alumnoBorrado:Alumno) => {
              alert("Alumno con id " + alumnoBorrado.id + " borrado");
              //recargar la lista
              //2 borrado local X
                this.listaAlumnos =  this.listaAlumnos.filter((alx)=>alx.id!=alumnoABorrar.id)
           } ,
            complete:() => console.log("Comunicacion Delete completa"),
            error: (errorRx)=> {
              console.error("Error al borrar el alumno " + alumnoABorrar.id + " " +errorRx);
            }
          }
        ); // (alumnoABorrar?.id ?? 0)

      } else {
        console.log('Operación cancelada');
      }
    
  }


}
