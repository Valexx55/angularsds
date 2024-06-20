import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';//es la forma nueva de cargar el módulo de Routing

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
