import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { PriceComponent } from './componets/price/price.component';
import { ProtectedComponent } from './componets/protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precio', component: PriceComponent },
    { path: 'protegida', component: ProtectedComponent, canActivate: [AuthGuardService] },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
