import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../class/marcador.class';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { MapaeditarComponent } from './mapaeditar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
   constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {
     if (localStorage.getItem('marcadores')) {
       this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
     }
  }

  ngOnInit() {
  }

  addmarc(evento) {
    const  cords = evento.coords;
    const marc = new Marcador(cords.lat, cords.lng);
    this.marcadores.push(marc);
    this.keepSrotage();
    const snackBarRef = this.snackBar.open('Marcador Agregado', 'Aceptar');
  }

  keepSrotage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
  deleteMarc(index: number) {
    this.marcadores.splice(index, 1);
    this.keepSrotage();
    const snackBarRef = this.snackBar.open('Marcador Eliminado', 'Aceptar');
  }
  update(mar: Marcador) {
    const dialogRef = this.dialog.open(MapaeditarComponent, {
      width: '250px',
      data: {titulo: mar.titulo, desc: mar.descrip }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result.titulo || result.desc) {
        return;
      }
      console.log(result.titulo, result.desc);
        mar.titulo = result.titulo;
        mar.descrip = result.desc;
        this.keepSrotage();
    });
  }
}
