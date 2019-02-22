import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: Heroe = {
    nombre: '',
    bio: 'Marvel',
    casa: ''
  };
  id: string;
  nuevo = false;
  constructor( private router: Router, private heroe: HeroesService, private active: ActivatedRoute) {
    this.active.params.subscribe(
      parametros => {
        console.log(parametros);
        this.id = parametros['id'];
        if (this.id !== '1') {
          this.heroe.getHeroe(this.id).subscribe(data => {
          this.hero = data;
          });
        }
      }
    );
   }
  ngOnInit() {
  }
  guardar() {
    if (this.id === '1') {
      this.heroe.nuevoheroe(this.hero).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/heroe', data.name]);
      }, error => console.log(error));
    } else {
      this.heroe.actualizar(this.hero, this.id).subscribe((data: any) => {
        console.log(data);
      }, error => console.log(error));
    }
  }
  agregarnuevo(forma: NgForm) {
    this.router.navigate(['/heroe', '1']);
    forma.reset({
      casa: 'Marvel'
    });
  }
}
