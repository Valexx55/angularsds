import { Component, Input, OnInit, inject } from '@angular/core';
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
export class FormularioAlumnoComponent implements OnInit {

  alumno:Alumno;

  nalumnos!:number;

  en_edicion:boolean;


  router:Router = inject(Router);//este objeto me permite enrutar programaticamente

//TODO: 1 LEER LOS PARÁMETROS DE LA URL x
//2 DIFERENCIAR SI ESTOY EDITANDO O CREANDO x
//3 SI QUIERO EDITAR, ¿CÓMO RELLENO EL FORMULARIO CON LOS
//DATOS DEL ALUMNO EN EDICIÓN?
  //1 SERVICIO: patrón Singleton
  //2 POR PARÁMETROS url
  //3 get ID
  //4 LocalStorage / SessionStorage

 @Input()idAlumno!:string;//el valor de la URL es automáticamente cargado por Angular

  constructor(private alumnoService:AlumnoService) {
    this.alumno = new Alumno();
    this.en_edicion = false;
  }
  ngOnInit(): void {
    if (this.idAlumno!=null) {
      console.log("estoy editando");
      this.en_edicion = true;
      //vamos a recuperar la info del alumno en edición desde el servidor
      //+string --> convierto un string a un número
      this.alumnoService.leerUnAlumnosDelServidor(+this.idAlumno).subscribe(
        {
          next: al=> this.alumno = al,
          error: (e) => console.error("error " + e),
        }
      );
    } else {
      console.log("estoy creando");
    }
  }

  estiloBoton():string
  {
    let estilo:string = '';

      if (this.en_edicion)
        {
          estilo = 'btn btn-success';
        } else {
          //estoy creando
          estilo = 'btn btn-primary';
        }
      

    return estilo;

  }

  actualizarAlumno() {
    //TODO: PUT
    console.log('actualizarAlumno');
    this.alumnoService.modificarAlumnoEnElServidor(this.alumno).subscribe(
      {
        next: al=> {
          console.log("Alumno modificado correctamente en el servidor");
          //una vez que se ha editado el alumno, nos dirigimos al listado /alumnos
          this.router.navigateByUrl("/alumnos");
        },
        error: (e) => console.error("error " + e),
      }
    );

  }

  crearAlumno()
  {
    //TODO: POST
    console.log("en crearAlumno ");
    this.alumnoService.leerTodosLosAlumnosDelServidor().subscribe({
      next: (lista) => {
        this.nalumnos = lista.length;
        this.alumno.id = this.nalumnos+1;
        this.alumnoService.crearAlumnoEnElServidor(this.alumno).subscribe(
          {
            next: (alumnoNuevo:Alumno) => {
              console.log("Alumno insertado correctamente en el servidor");
              //una vez que se cree el alumno, nos dirigimos al listado /alumnos
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
