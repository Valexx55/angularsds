import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponent } from './alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from '../../app.routes';
import { AlumnoService } from '../../services/alumno.service';

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;
  let alumnoService:AlumnoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosComponent, HttpClientModule],
      providers: [provideRouter(routes, withComponentInputBinding())]
    })
    .compileComponents();
    
    alumnoService = TestBed.inject(AlumnoService);
    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('test integración lectura alumnos', (done:DoneFn) => {

    alumnoService.leerTodosLosAlumnosDelServidor().subscribe (
      {
        next: listaAlumnosRx => {
          component.listaAlumnos = listaAlumnosRx;
          fixture.detectChanges();
          //vamos a comprobar que la sección lista alumnos tiene algo
          let divAlumnos = fixture.nativeElement.querySelector ('.listaAlumnos') as HTMLDivElement;
          expect(divAlumnos.children.length).toBeGreaterThan(0);
          expect(component.listaAlumnos.length).toBeGreaterThan(0);
          done();
        }
      }
    )
    expect(component).toBeTruthy();
  });
});
