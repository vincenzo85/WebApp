import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // qui ci vanno tutti i servizi ... che esistono.... 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
