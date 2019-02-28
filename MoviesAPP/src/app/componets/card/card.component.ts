import { Component, OnInit, Input } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

@Input()  movies = [];
@Input()  pag: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
   movieDescription(id: string) {
    this.router.navigate(['/movie', id, this.pag]);
  }

}
