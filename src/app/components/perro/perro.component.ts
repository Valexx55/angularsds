import { Component, inject } from '@angular/core';
import { PerroService } from '../../services/perro.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Perroweb } from '../../models/perroweb';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-perro',
  standalone: true,
  imports: [],
  templateUrl: './perro.component.html',
  styleUrl: './perro.component.css'
})
export class PerroComponent {

  titulo: string;
  //perroService:PerroService = inject(PerroService)

  rutaFotoPerro:string;
  observerPerrosApi: Observer<Perroweb>;
  observerPerrosApiConCabecera: Observer<HttpResponse<Perroweb>>;

  constructor(private perroService: PerroService) {
    console.log("Perro creado");
    this.rutaFotoPerro="assets/perromuestra.jpg";
    this.titulo = "FOTOS ALEATORIAS DE PERROS"
    this.observerPerrosApi = {
      next: (perroRx:Perroweb) => {
        console.log('Observer got a next value: ' + perroRx.message +" "+ perroRx.status);
        this.rutaFotoPerro = perroRx.message;
        
      },
      error: (err:any) => console.error('Error al leer el perro ' + err),
      complete: () => console.log('Comunicación con el servidor completada'),
    }

    this.observerPerrosApiConCabecera = {
      next: (httpRx:HttpResponse<Perroweb>) => {

        let perroRx = httpRx.body ?? new Perroweb();

        console.log('Observer got a next value: ' + perroRx.message +" "+ perroRx.status);
        this.rutaFotoPerro = perroRx.message;
        //TODO: sacar las cabaceras del mensaje HTTP 
      },
      error: (err:any) => console.error('Error al leer el perro ' + err),
      complete: () => console.log('Comunicación con el servidor completada'),
    }
  }

  traerPerroAleatorio() {
    console.log(" traerPerroAleatorio()");
    this.perroService.cargarPerroAleatorioDelServidor().subscribe(this.observerPerrosApi);
    this.perroService.cargarPerroAleatorioDelServidorConCabeceras().subscribe(this.observerPerrosApiConCabecera);
  }

}
