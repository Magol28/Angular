import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};
  constructor(private activateR: ActivatedRoute, private _heroeS: HeroesService) {

    this.activateR.params.subscribe(params => {
    this.heroe = this._heroeS.getHeroe(params['id']);
    });
   }


}
