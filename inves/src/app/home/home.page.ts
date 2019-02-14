import { Component } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { Persona } from '../models/persona';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {

p1: Persona;

// tslint:disable-next-line:no-inferrable-types
name: string = '';

// tslint:disable-next-line:no-inferrable-types
surname: string = '';

// tslint:disable-next-line:no-inferrable-types
id: number = 0;
  constructor(private crud: CrudService) {
  }
  insertar() {
    const p = new Persona();
    p.fname = this.name;
    p.lname = this.surname;
    p.id = 1;
    this.crud.insertar(p);
  }
  Buscar() {
 this.crud.obtener(this.id).subscribe( data => {
   console.log(data);
  this.id = data.id;
  this.name = data.fname;
  this.surname = data.lname;
 });

}
 Editar() {
   console.log('si');
  const p = new Persona();
  p.fname = this.name;
  p.lname = this.surname;
  p.id = this.id;
   this.crud.modificar(p).subscribe(
     data => {
       alert('editado correctamente');
     }
   );
 }

 Eliminar() {
  this.crud.eliminar(this.id).subscribe( data => {
    console.log(data);
  });
 }
}
