import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// main dell'applicazione angular ... 
// tutto in angular funziona a moduli...



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // file fondamentale della risorsa...
  // file ts.... 


  