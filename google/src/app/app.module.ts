import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
// material
import { MaterialModule } from './material.module';
import { MapaComponent } from './componets/mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXwVQSXMlQ226CGNKUp6qdxdECQEsjBY8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
