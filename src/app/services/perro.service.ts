import { Injectable, inject } from '@angular/core';
import { RUTA_SERVIDOR_PERRO_ALEATORIO } from '../config/app';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Perroweb } from '../models/perroweb';
import { Observable } from 'rxjs';


/**
 * esta clase encapsula la comunicación por HTTP
 * con el servidor de perros
 * 
 * GET https://dog.ceo/api/breeds/image/random
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class PerroService {

  ruta_servidor:string= RUTA_SERVIDOR_PERRO_ALEATORIO;

  //httpClient:HttpClient = inject(HttpClient);//alternativa a la Inyección de DEpendencias

  constructor(private httpClient:HttpClient) {
    console.log("Servicio creado");
   }

  cargarPerroAleatorioDelServidor ():Observable<Perroweb>
  {
    return this.httpClient.get<Perroweb>(this.ruta_servidor);
  }

  cargarPerroAleatorioDelServidorConCabeceras ():Observable<HttpResponse<Perroweb>>
  {
    return this.httpClient.get<Perroweb>(this.ruta_servidor, {observe: 'response',transferCache: {includeHeaders:['content-type']}});
  }
}
