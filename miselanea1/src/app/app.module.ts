import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './componnets/ng-style/ng-style.component';
import { CssComponent } from './componnets/css/css.component';
import { ClasesComponent } from './componnets/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgswComponent } from './componnets/ngsw/ngsw.component';
import { HomeComponent } from './componnets/home/home.component';
import { AppRoutingModule } from './app.routes';
import { UsuarioComponent } from './componnets/usuario/usuario.component';
import { UsuarioNuevoComponent } from './componnets/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './componnets/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './componnets/usuario/usuario-detalle.component';
import { NavbarComponent } from './componnets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgswComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
