import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-mapaeditar',
  templateUrl: './mapaeditar.component.html',
  styleUrls: ['./mapaeditar.component.css']
})
export class MapaeditarComponent implements OnInit {

  forma: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<MapaeditarComponent>, public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.forma = fb.group({
        'titulo': data.titulo,
        'desc': data.desc
      });
    }

  ngOnInit() {
  }

  update() {
    console.log(this.forma.value);
    this.dialogRef.close(this.forma.value);
  }
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
