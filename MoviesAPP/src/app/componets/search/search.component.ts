import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  moviedetails: any;
  movie = '';
  movies = [];
  constructor(private peli: PeliculasService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      if (params['id'] === 'movie') {
        this.movie = '';
      } else {
        this.movie = (params['id']);
        this.Buscar(this.movie);
      }
    });
  }
  ngOnInit() {
  }

  Buscar(forma: string) {
    this.peli.buscarPelicula(forma).subscribe(data => {
      this.movies = data;
    });
  }
}
