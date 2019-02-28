import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  movie = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  search() {
   this.router.navigate(['/search', this.movie]);
  }

}
