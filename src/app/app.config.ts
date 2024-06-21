import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';//es la forma nueva de cargar el módulo de Routing

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';//para poder usar HTTP en nuestra APP

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
