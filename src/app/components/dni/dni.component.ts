import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dni',
  standalone: true,//NO DEBE REGISTRARSE A NINGÚN MODULA
  imports: [FormsModule],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnInit, OnDestroy {
 
  titulo:string;
  numero!:number|null;//UNION TYPE
  letra!:string;
  prefijo!:string;


  //atributo a nivel de Clase
  static readonly SECUENCIA_LETRAS: string = "TRWAGMYFPDXBNJZSQVHLCKE";
  /**
   * TODO: vamos a hacer un componente para el cálculo
   * de la letra del DNI o 
   * 
   * https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
   */
 
  constructor()
  {
       
    this.titulo= 'CALCULE LA LETRA DE SU DNI' 
    console.log("constructor dni");
    //this.numero=8;
  }

  ngOnInit(): void {
   console.log("En ngInit Dni");
  }
  ngOnDestroy(): void {
    console.log("En ngOnDestroy Dni");
  }

  cambioLetraRadio (evento: Event):void
  {
    //let inputRadioTocado: HTMLInputElement = <HTMLInputElement>evento.target; //con esto, sé a qué elemento le han hecho click
    let inputRadioTocado: HTMLInputElement = evento.target as HTMLInputElement; //con esto, sé a qué elemento le han hecho click
    //inputRadioTocado.
    this.prefijo = inputRadioTocado.id;

    //console.log("Radio Clickado con prefijo " + this.prefijo);
    console.log(`Radio Clickado con prefijo ${this.prefijo} ${this.numero}`);
  }

  calcularLetraDni() {
    //console.log("en calcularLetraDni() con el numero " + this.numero);
    let numeroDni = this.numero?.valueOf();
    console.log("en calcularLetraDni() con el numero " + numeroDni);
    if (this.prefijo=='y')
      {
        //le tenemos que aañdir un uno por delante
          numeroDni = parseInt("1"+numeroDni);//de string a número
      } else if (this.prefijo=='z')
        {
          //le tenemos que aañdir un uno por delante
          numeroDni = parseInt("2"+numeroDni);//de string a número
        }
        
        if (numeroDni)
          {
            let resto = numeroDni%(DniComponent.SECUENCIA_LETRAS.length);
            this.letra = DniComponent.SECUENCIA_LETRAS.charAt(resto);
            console.log("SU LETRA ES " + this.letra);
          }
     
  }

}
