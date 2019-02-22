import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { HeroComponent } from './componets/heroes/hero.component';


const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroComponent },
    { path: '**', component: HeroesComponent },

];


export const app_routing = RouterModule.forRoot(routes);
