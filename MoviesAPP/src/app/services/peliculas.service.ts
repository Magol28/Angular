import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '3fa33becba19c802ced1fdeef8a78cd6';
  private url = 'http://api.themoviedb.org/3';

  constructor(private http: Jsonp) { }

  getMovies(): any {
   const moviesurl = `${this.url}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
   return this.http.get(moviesurl).pipe(
                map(res => (res['_body'].results))
  );
  }

  getMoviesToday() {
    const date = new Date();
    const day = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    const moviesurl = `${this.url}/discover/movie?primary_release_date.gte=${day}&
    primary_release_date.lte=${day}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.get(moviesurl).pipe(
                 map(res => (res['_body'].results))
   );
  }
  getMoviesKids() {
    const moviesurl = `${this.url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    &api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.get(moviesurl).pipe(
                 map(res => (res['_body'].results))
   );
  }
  getPelicula( id: string ) {
    const url = `${ this.url }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.get( url ).pipe(
      map(res => (res['_body'])));
  }

  buscarPelicula( texto: string ) {

    const urlmovie = `${ this.url }/search/movie?query=${ texto }
    &sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.get( urlmovie )
                .pipe(map( res => res['_body'].results));
  }
}
