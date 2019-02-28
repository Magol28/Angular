import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { NavComponent } from './componets/nav/nav.component';
import { CardComponent } from './componets/card/card.component';
import { PupularComponent } from './componets/pupular/pupular.component';
import { HomeComponent } from './componets/home/home.component';
import { PopularKidsComponent } from './componets/popular-kids/popular-kids.component';
import { TodayComponent } from './componets/today/today.component';
import { SearchComponent } from './componets/search/search.component';
import { MovieComponent } from './componets/movie/movie.component';
import { routes } from './routes.config';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    PupularComponent,
    HomeComponent,
    PopularKidsComponent,
    TodayComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash : true}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
