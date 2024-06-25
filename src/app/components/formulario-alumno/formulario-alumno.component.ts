import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-formulario-alumno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent {

  alumno:Alumno;



  constructor() {
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
    //TODO: insertar- hacer un POST al servidor Conexxión componente-servicio
  }
}
