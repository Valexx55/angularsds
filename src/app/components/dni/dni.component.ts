import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  standalone: true,
  imports: [],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnInit, OnDestroy {
 
  numero!:number;
  letra!:string;
  prefijo!:string;
  /**
   * TODO: vamos a hacer un componente para el cáculo
   * de la letra del DNI o 
   * 
   * https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
   */
 
  constructor()
  {
    console.log("constructor dni");
  }

  ngOnInit(): void {
   console.log("En ngInit Dni");
  }
  ngOnDestroy(): void {
    console.log("En ngOnDestroy Dni");
  }

}
