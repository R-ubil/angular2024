import { Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', component: CocktailListComponent },
  { path: 'cocktail/:cocktailId', component: CocktailComponent },
];
