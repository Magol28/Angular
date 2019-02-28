import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-popular-kids',
  templateUrl: './popular-kids.component.html',
  styles: []
})
export class PopularKidsComponent implements OnInit {

  pag = 'home';
  movies = [];
  constructor(private peli: PeliculasService) {
    this.peli.getMoviesKids().subscribe(
      data => {
      this.movies = data;
      }
    );
  }
  ngOnInit() {
  }

}
