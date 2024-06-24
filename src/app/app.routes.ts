import { Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { JuegoComponent } from './components/juego/juego.component';

//este array "mapea" / asocia la ruta lógica dada a un componente
//con ese componte
export const routes: Routes = [
    {path:'dni', component:DniComponent},
    {path:'perro', component:PerroComponent},
    {path:'juego', component:JuegoComponent},
];
