
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private _heroService: HeroesService,
                private router: Router) { }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
    // console.log(this.heroes);
  }
  verHeroes(index: number) {
   this.router.navigate(['/heroe', index]);
  }

}
