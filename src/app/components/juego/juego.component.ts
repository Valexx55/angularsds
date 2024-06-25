import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarcadorComponent } from '../marcador/marcador.component';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [FormsModule, MarcadorComponent],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent implements AfterViewInit {

  nombreJugador:string;
  readonly tituloJuego:string="Juega al Piedra Papel Tijera"
  jugadoPc!:boolean;
  jugadoUsuario!:boolean;
  //defino propiedades para acceder a los hijos del Componente
  //previamente, esos hijos, han sido marcados con la almohadilla #
  //angular, ligará la etiqueta #imgpc a esta propiedad
  //ElementRef es el tipo de Angular para envolver o referenciar a un elemento "nativo"
  @ViewChild('imgpc') imagenPc!: ElementRef<HTMLImageElement>;
  @ViewChildren('piedra, papel, tijera') botones!:QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild(MarcadorComponent) marcadorHijo!: MarcadorComponent;

  ids_botones: Array<string> = ["piedra", "papel", "tijera"];
  img_botones: Array<string> = ["rock", "paper", "scissors"];

  //PARA DECICIDR QUIÉN GANA
  //[OPCION_JUGADOR, OPCIÓN_MÁQUINA] 
  //0 --> empate
  //1--> gana jugador
  // -1--> gana la máquina
  tabla_decision: Array<Array<number>> = [ //estructura de datos que permite inferir el resultado
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
  ];

  jugadaUsuario:number;//para saber la jugada 0 1 o 2 -- piedra papel o tijera
  jugadaPc:number;

  constructor()
  {
    this.jugadaPc = -1;
    this.jugadaUsuario = -1;
    this.nombreJugador = '';
    this.jugadoPc = false;
    this.jugadoUsuario = false;
    if (this.imagenPc)
      {
        console.log("La imagen existe constructor");
      } else {
        console.log("La imagen NO existe constructor");
      }
  }

  ngOnInit(): void {
    
    console.log("En el ngOnInit de JuegoComponent");
  }

  //"window.onload () - cuando se carga el HTML"
  ngAfterViewInit(): void {
    if (this.imagenPc)
      {
        console.log("La imagen existe ngAfterViewInit");
      } else {
        console.log("La imagen NO existe ngAfterViewInit");
      }
  }

  //generamos un numero aleatorio 0 1 o 2 (piedra papel o tijera)
  obtenerJugadaAleatoriaPc ():number
  {
    return Math.floor(Math.random()*3);
  }

  aJugar()
  {
    //el usuario ya ha hecho su elección, 
    //determinar la jugada de la máquina
    this.jugadaPc = this.obtenerJugadaAleatoriaPc();
    //pintar la imagen de la jugada del pc
    let rutaDibujo = this.img_botones[this.jugadaPc];
    this.imagenPc.nativeElement.setAttribute('src', `assets/img/${rutaDibujo}.png`);
    this.imagenPc.nativeElement.setAttribute('alt', `${rutaDibujo}`);

    this.jugadoPc = true;

    let resultado = this.tabla_decision[this.jugadaUsuario][this.jugadaPc]

   // let mensaje:string = '';

    //alert(mensaje);
    this.marcadorHijo.actualizarMarcador(resultado);

  }


  seleccionUsuario(numero:number, evento:Event)
  {
    this.jugadoUsuario = true;
    this.jugadaUsuario = numero;

    //desmacar / quitar el estilo a las imagenes seleccioanda previamente
    this.botones.forEach(imgElement => {
      imgElement.nativeElement.classList.remove('marcada');
    })

    //vamos a decorar la imagen seleccionada
    let imagenTocada = <HTMLImageElement>evento.target;// as HTMLImageElement
    imagenTocada.classList.add('marcada');

  }



}
