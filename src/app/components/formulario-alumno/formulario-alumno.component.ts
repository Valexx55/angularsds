import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-alumno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent {


  estiloBoton():string
  {
    let estilo:string = '';

      estilo = 'btn btn-primary'

    return estilo;

  }

  crearAlumno()
  {
    console.log("en crearAlumno");
  }
}
