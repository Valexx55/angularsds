import { Component, inject } from '@angular/core';
import { PerroService } from '../../services/perro.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Perroweb } from '../../models/perroweb';
import { Observer } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-perro',
  standalone: true,
  imports: [MatProgressBarModule],
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

  enDescarga:boolean;

  constructor(private perroService: PerroService) {
    //this.raza = '';
    this.enDescarga= false;
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
        this.enDescarga=false;


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
    this.enDescarga=true;

    setTimeout(()=> 
      this.perroService.cargarPerroAleatorioDelServidor().subscribe(this.observerPerrosApi), 
    1000)

    
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

  ordenarPorId ()
  {
    console.log(" click ordenarPorId");
    /*this.listaPerros.sort(
    (perro1:Perroweb, perro2:Perroweb) => {
      let numDev:number = 0;

        if (perro1.id < perro2.id)
          {
            numDev = 100;
          } else if (perro2.id < perro1.id)
            {
              numDev = -100;
            } 
            else {
              numDev = 0;
            }

      return numDev;
    }
    )*/

    this.listaPerros.sort(
      (p1, p2) => p1.id-p2.id   
      );



  }

  ordenarPorRaza()
  {
    console.log(" click ordenarPorRaza");

    this.listaPerros.sort ((p1, p2) => 
      {
        let numDev = 0;

        if (p1.raza>p2.raza )
          {
            numDev = 1;
          } else if (p1.raza<p2.raza )
            {
              numDev = -1;
            }
        return numDev;
      }
     
    );

  }

}
