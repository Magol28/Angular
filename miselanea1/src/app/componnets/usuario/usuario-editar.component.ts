import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) {
    this.ruta.parent.params.subscribe(parametros => {
      console.log(parametros);
    });
   }

  ngOnInit() {
  }

}
