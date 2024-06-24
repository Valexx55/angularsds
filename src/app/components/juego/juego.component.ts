import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  nombreJugador:string;
  readonly tituloJuego:string="Juega al Piedra Papel Tijera"
  jugadoPc!:boolean;
  jugadoUsuario!:boolean;
  //defino propiedades para acceder a los hijos del Componente
  //previamente, esos hijos, han sido marcados con la almohadilla #
  //angular, ligará la etiqueta #imgpc a esta propiedad
  @ViewChild('imgpc') imagenPc!: ElementRef<HTMLImageElement>;



  constructor()
  {
    this.nombreJugador = '';
    this.jugadoPc = false;
    this.jugadoUsuario = false;
  }

  aJugar()
  {

  }


  seleccionUsuario(numero:number, evento:Event)
  {

  }

}
