import { Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { JuegoComponent } from './components/juego/juego.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

//este array "mapea" / asocia la ruta lógica dada a un componente
//con ese componte
export const routes: Routes = [
    {path:'dni', component:DniComponent}, //dni
    {path:'perro', component:PerroComponent}, //perros
    {path:'juego', component:JuegoComponent}, //juego
    {path:'alumno/form', component:FormularioAlumnoComponent}, // para crear o modificar alumno
    {path:'alumno/form/edit/:idAlumno', component:FormularioAlumnoComponent}, // para crear o modificar alumno
    {path:'alumnos', component:AlumnosComponent}, // para el listado de alumnos
];
