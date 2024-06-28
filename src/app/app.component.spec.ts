import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:  [provideRouter(routes, withComponentInputBinding())]
    }).compileComponents();
  });


   /**
   * 
   * abstract class ComponentFixture {
  debugElement;       // test helper 
  componentInstance;  // access properties and methods
  nativeElement;      // access DOM
  detectChanges();    // trigger component change detection
}

   */

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the SDS Angular title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SDS Angular');
  });

  it('el estilo del logo debe ser angular-logo ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let appc =  fixture.componentInstance;
    let domHtmlComponent = fixture.nativeElement as HTMLElement;
    expect(domHtmlComponent.querySelector('svg')?.classList).toMatch('angular-logo');
    //fixture.detectChanges();
    //const compiled = fixture.nativeElement as HTMLElement;
    //expect(compiled.querySelector('h1')?.textContent).toContain('Hello, sdsangular');
  });

  it('actualización del titulo del componente' , () => {
    const fixture = TestBed.createComponent(AppComponent);
    let appc =  fixture.componentInstance;
    appc.title = "SANTANDER";
    fixture.detectChanges();
    let domHtmlComponent = fixture.nativeElement as HTMLElement;
    expect(domHtmlComponent.querySelector('.navbar-brand')?.innerHTML).toMatch('SANTANDER');

  }

  );
});
