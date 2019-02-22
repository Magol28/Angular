import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL = 'https://heroesapp-d32d5.firebaseio.com/heroes.json';
  URLEDIT = 'https://heroesapp-d32d5.firebaseio.com/heroes/';
  constructor(private http: HttpClient) { }

  nuevoheroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);

    return this.http.post(this.URL, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
             });
  }
  actualizar(heroe: Heroe, kety: string) {
    const body = JSON.stringify(heroe);

    return this.http.put(this.URLEDIT + kety + '.json', body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
             });
  }

  getHeroe(id: String) {
    return this.http.get(this.URLEDIT + id + '.json');
  }
  getHeroes() {
    return this.http.get(this.URL);
  }
  deleteheroe(id: string) {
    return this.http.delete(this.URLEDIT + id + '.json');
  }
}
