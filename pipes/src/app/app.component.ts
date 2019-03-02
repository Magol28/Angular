import { Component } from '@angular/core';
import { reject } from 'q';
import {LOCALE_ID} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Miguel';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;
  a = 0.23;
  dolar = 1234.5;
  euro = 5;
  heroe = {
    nombre : 'logan',
    clave : 'wolverine',
    edad : 500,
    direccion: {
      calle: 'primera',
      casa : '19'
    }
  };

  fecha = new Date();
  // tslint:disable-next-line:no-shadowed-variable
  valorPromesa = new Promise ((resolve, reject) => {
setTimeout(() =>  resolve('llego la data'), 3500);
  });

  video = 'tvmWbhCR37I';
  nombre2 = 'fernanDo alberTo HerRera JimenZ';
  password = true;
  pass = 'aaa';
}
