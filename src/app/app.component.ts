import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',//nombre de la "etiqueta"
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//"la parte diánimca o funcional de este componente - JS"
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
 
  title:string;//non null operator relajamos la restricción sobre null
  //title!:string;//non null operator relajamos la restricción sobre null

  constructor()
  {
    this.title="SDS Angular";
    console.log("En el constructor de AppComponent");//1
  }
  ngOnDestroy(): void {
    console.log("En el ngOnDestroy de ngOnDestroy"); //el html se ha cargado
  }
  ngAfterViewInit(): void {
    console.log("En el ngAfterViewInit de ngAfterViewInit"); //el html se ha cargado
  }

  ngOnInit():void
  {
    console.log("En el ngOnInit de AppComponent");//2
  }



}
