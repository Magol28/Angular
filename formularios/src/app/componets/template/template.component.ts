import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border:1px solid red;
  }
  `]
})
export class TemplateComponent {

  constructor() { }
  user: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'hombre',
    acepta: null
  };
  paises = [{
  codigo: 'USA',
  nombre: 'Estados Unidos'
  }, {
    codigo: 'ECU',
    nombre: 'Ecuador'
    }];
    sexos = [{
      codigo: '1',
      nombre: 'Hombre'
      }, {
        codigo: '2',
        nombre: 'Mujer'
        }];

  Guardar(forma: NgForm) {
    console.log(forma);
    console.log(this.user);
  }
}
