import { Component, inject } from '@angular/core';
import { PerroService } from '../../services/perro.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perro',
  standalone: true,
  imports: [],
  templateUrl: './perro.component.html',
  styleUrl: './perro.component.css'
})
export class PerroComponent {

  titulo:string;
  //perroService:PerroService = inject(PerroService)

  constructor(private perroService:PerroService)
  {
    this.titulo = "FOTOS ALEATORIAS DE PERROS"
  }

  traerPerroAleatorio()
  {
    console.log(" traerPerroAleatorio()");
    this.perroService.cargarPerroAleatorioDelServidor() //TODO: consumir el Observable del servicio
  }

}
