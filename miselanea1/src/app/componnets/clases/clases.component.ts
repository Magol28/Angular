import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  constructor() { }
  alert = 'alert-danger';
  loaging = false;
  propiedades: Object = {
  danger: false
  };
  ngOnInit() {
  }
  ejecutar() {
    this.loaging = true;
    setTimeout(() => this.loaging = false, 3000);
  }

}
