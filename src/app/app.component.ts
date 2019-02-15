import { Component } from '@angular/core';
// questi sono i "fogli" del nostro component


@Component({
  // selector... sarà il tag del mi html dell'index
  
  selector: 'app-root',
  // html che ci voglio mettere..

  templateUrl: './app.component.html',
  // css del progetto... anche se usando bootstrap... css non ne metto tantissimo...

  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  // variabile di instanza che gira nel browser 

  // sto modificando la variabile...

  
  title = 'ciao a tutti';
}
