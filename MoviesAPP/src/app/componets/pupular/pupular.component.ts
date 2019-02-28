import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pupular',
  templateUrl: './pupular.component.html',
  styles: []
})
export class PupularComponent  {
  movies = [];
  constructor(private peli: PeliculasService) {
    this.peli.getMovies().subscribe(
      data => {
      this.movies = data;
      }
    );
  }

}
