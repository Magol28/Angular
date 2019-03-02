import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
// material
import { MaterialModule } from './material.module';
import { MapaComponent } from './componets/mapa/mapa.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MapaeditarComponent } from './componets/mapa/mapaeditar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [
    MapaeditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaeditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: '
      '
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
