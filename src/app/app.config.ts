import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';//es la forma nueva de cargar el módulo de Routing
//withComponentInputBinding me permite acceder a los parámetros de una url desde un compoenente
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';//para poder usar HTTP en nuestra APP

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient(), provideAnimationsAsync()]
};
