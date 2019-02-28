import { Routes} from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { SearchComponent } from './componets/search/search.component';
import { MovieComponent } from './componets/movie/movie.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id/:pag', component: MovieComponent },
    { path: 'search/:id', component: SearchComponent },
    { path: '**', pathMatch : 'full', redirectTo: 'home' },


];
