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
  raza!:string;
  //perroService:PerroService = inject(PerroService)
  listaPerros:Array<Perroweb>

  rutaFotoPerro:string;
  observerPerrosApi: Observer<Perroweb>;
  observerPerrosApiConCabecera: Observer<HttpResponse<Perroweb>>;

  constructor(private perroService: PerroService) {
    //this.raza = '';

    console.log("Perro creado");
    this.listaPerros=[];//inicializo el array de perros
    this.rutaFotoPerro="assets/perromuestra.jpg";
    this.titulo = "FOTOS ALEATORIAS DE PERROS"
    this.observerPerrosApi = {
      /*next: function respuestaOk (perroRx:Perroweb)  {
        console.log('Observer got a next value: ' + perroRx.message +" "+ perroRx.status);
        this.rutaFotoPerro = perroRx.message;
        this.raza = perroRx.message.split('/')[4];
        
      }*/
      next: (perroRx:Perroweb) => {
        console.log('Observer got a next value: ' + perroRx.message +" "+ perroRx.status);
        this.rutaFotoPerro = perroRx.message;
        this.raza = perroRx.message.split('/')[4];
        let perroNuevo = new Perroweb();
        //creo el objeto perro con la nueva info recibida
        perroNuevo.id = this.listaPerros.length+1;//id "aleatorio"
        perroNuevo.message = perroRx.message;//foto
        perroNuevo.raza = this.raza;
        //add al array
        this.listaPerros.push(perroNuevo);
        console.log(`Hemos recibido ${this.listaPerros.length} perros`);
        this.mostrarListaPerros();


      },
      error: (err:any) => console.error('Error al leer el perro ' + err),
      complete: () => console.log('Comunicación con el servidor completada'),
    }

    this.observerPerrosApiConCabecera = {
      next: (httpRx:HttpResponse<Perroweb>) => {

        let perroRx = httpRx.body ?? new Perroweb();

        console.log('Observer got a next value: ' + perroRx.message +" "+ perroRx.status);
        this.rutaFotoPerro = perroRx.message;
        this.raza = perroRx.message.split('/')[4];
        this.mostrarCabeceras (httpRx);

      },
      error: (err:any) => console.error('Error al leer el perro ' + err),
      complete: () => console.log('Comunicación con el servidor completada'),
    }
  }

  traerPerroAleatorio() {
    console.log(" traerPerroAleatorio()");
    this.perroService.cargarPerroAleatorioDelServidor().subscribe(this.observerPerrosApi);
    //this.perroService.cargarPerroAleatorioDelServidorConCabeceras().subscribe(this.observerPerrosApiConCabecera);
  }

  mostrarCabeceras (httpRx : HttpResponse<Perroweb>)
  {
      let tipoMime:string =  httpRx.headers.get('content-type') ?? "desconocido";
      let status:number =  httpRx.status;

      console.log(`TIPO MIME =  ${tipoMime} y STATUS = ${status}`);
  }

  mostrarListaPerros ()
  {
    this.listaPerros.forEach((perro, indice)=>{
      console.log(`${indice} - ${perro.raza}`);
    })
  }

}
