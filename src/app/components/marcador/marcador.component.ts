import { Component, Input } from '@angular/core';
import { Marcador } from '../../models/marcador';

@Component({
  selector: 'app-marcador',
  standalone: true,
  imports: [],
  templateUrl: './marcador.component.html',
  styleUrl: './marcador.component.css'
})
export class MarcadorComponent {


  @Input() nombreJugadorMarcador!:string;
  marcadorActual:Marcador;

  constructor ()
  {
    this.marcadorActual = new Marcador();
  }

  actualizarMarcador (resultado:number)
  {
    switch (resultado)
    {
      case -1: 
        //mensaje = "Ha ganado la máquina";
        this.marcadorActual.puntuacion_maquina = this.marcadorActual.puntuacion_maquina + 1;
      break;
      case 0: 
        //mensaje = "EMAPTE";
        this.marcadorActual.puntuacion_maquina = this.marcadorActual.puntuacion_maquina + 1;
        this.marcadorActual.puntuacion_jugador = this.marcadorActual.puntuacion_jugador + 1;
      break;
      case 1: 
        //mensaje = "Ha ganado el jugador";
        this.marcadorActual.puntuacion_jugador = this.marcadorActual.puntuacion_jugador + 1;
      break;

    }

  }


  borrarMarcador()
  {
    this.marcadorActual.puntuacion_jugador = 0;
    this.marcadorActual.puntuacion_maquina = 0;
  }

}
