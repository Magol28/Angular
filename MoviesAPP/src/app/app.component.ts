import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private peli: PeliculasService) {

  }
}
