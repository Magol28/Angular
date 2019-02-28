import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroetargeta',
  templateUrl: './heroetargeta.component.html',
  styleUrls: ['./heroetargeta.component.css']
})
export class HeroetargetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }
  verHeroes() {
    // this.router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
   }
}
