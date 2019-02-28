import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  pag: string;
  moviedetails: any;
  constructor(private peli: PeliculasService, private router: ActivatedRoute, private rou: Router) {
  }
  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params['pag']);
      this.peli.getPelicula(params['id']).subscribe(movie => {
        this.moviedetails = movie;
        this.pag = params['pag'];
      });
    });
  }
  regresar() {
    if (this.pag === 'home') {
      this.rou.navigate(['/home']);
    } else {
      this.rou.navigate(['/search', 'movie']);
    }

  }
}
