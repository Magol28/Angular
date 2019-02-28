import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styles: []
})
export class TodayComponent implements OnInit {

  movies = [];
  constructor(private peli: PeliculasService) {
    this.peli.getMoviesToday().subscribe(
      data => {
      this.movies = data;
      }
    );
  }
  ngOnInit() {
  }

}
