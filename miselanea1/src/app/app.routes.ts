import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './componnets/usuario/usuario.component';

import { routesUser } from './componnets/usuario/usuario.routes';


import { HomeComponent } from './componnets/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'Usuario/:id',
        component: UsuarioComponent,
        children: routesUser,
    },
    { path: '**', component: HomeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
