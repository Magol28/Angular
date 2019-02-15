import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
   <app-css></app-css>
   <app-css></app-css>
   <app-clases></app-clases>
   <p [appResaltado]="'orange'">
      hola mundo
  </p>
  <app-ngsw></app-ngsw>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
