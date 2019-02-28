import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroesearch',
  templateUrl: './heroesearch.component.html',
  styles: []
})
export class HeroesearchComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private _heroService: HeroesService,
                private router: Router,
                private activateR: ActivatedRoute) {
                }

  ngOnInit() {
    this.activateR.params.subscribe(params => {
      this.heroes = this._heroService.buscarHeroes(params['name']);
      });
  }
  verHeroes(index: number) {
    this.router.navigate(['/heroe', index]);
   }
}
