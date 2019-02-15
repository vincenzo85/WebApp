import { Component, OnInit } from '@angular/core';
// creato un nuovo component
@Component({

  // nuovo selector...
  selector: 'app-utenti-list',
  templateUrl: './utenti-list.component.html',
  styleUrls: ['./utenti-list.component.scss']
})
export class UtentiListComponent implements OnInit {
/*  vediamo che se questi sono migliori come commenti */

/* ne costuttore inizializzo le variabili....  */
  constructor() { }

/* qui non posso fare rifermento ai componenti di angular... le elaborzioni dell'html dopo */
  ngOnInit() {
  }
/* after view init ci serve dopo.... */
}
