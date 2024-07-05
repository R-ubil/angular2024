import { Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

export const routes: Routes = [
  { path: '', component: CocktailListComponent },
  { path: 'cocktails', component: CocktailListComponent },
  { path: 'cocktails/:cocktailId', component: CocktailComponent },
  { path: '**', redirectTo: 'cocktails' },
];
