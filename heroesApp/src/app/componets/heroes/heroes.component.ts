import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  constructor(private servicesheroe: HeroesService, private router: Router) {
    this.servicesheroe.getHeroes().subscribe(
                      data => {
                        this.heroes = data;
                      }
    );
   }

   borrar(k) {
     this.servicesheroe.deleteheroe(k).subscribe(data => {
      if (data) {
        console.error(data);
      } else {
        delete this.heroes[k];
      }
     });
   }
  ngOnInit() {
  }

}
