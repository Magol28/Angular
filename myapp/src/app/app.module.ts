import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas

import { AppRouting } from './app.routes';
// componenetes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// servicios
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesearchComponent } from './components/heroesearch/heroesearch.component';
import { HeroetargetaComponent } from './components/heroetargeta/heroetargeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesearchComponent,
    HeroetargetaComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
