import { Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

export const routes: Routes = [
  { path: 'cocktails', component: CocktailListComponent },
  { path: 'cocktail/:cocktailId', component: CocktailComponent },
  { path: '**', redirectTo: 'cocktails' },
];
