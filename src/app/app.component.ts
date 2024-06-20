import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',//nombre de la "etiqueta"
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//"la parte diánimca o funcional de este componente - JS"
export class AppComponent {
  title = 'sdsangular';
}
