import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtentiListComponent } from './utenti/utenti-list/utenti-list.component';

@NgModule({
  // qui abbiamo il nuovo componente
  declarations: [
    AppComponent,

    UtentiListComponent
  ],
  imports: [
    BrowserModule
  ],
  // qui ci vanno tutti i servizi ... che esistono....
  providers: [],
  bootstrap: [AppComponent, UtentiListComponent]
})
export class AppModule { }
