import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './alumno.service';
import { HttpClientModule } from '@angular/common/http';

describe('AlumnoService', () => {
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('leerUnAlumnosDelServidor por su id', (done:DoneFn) => {
    service.leerUnAlumnosDelServidor(4).subscribe(
      {
        next: alumnoRx => {
          expect(+alumnoRx.id).toBe(4);
          done();//fin
        }
      }
    )
  });
});
