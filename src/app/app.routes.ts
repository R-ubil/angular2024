import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

export const routes: Routes = [
  { path: '', component: CocktailListComponent },
  { path: 'cocktail/:cocktailId', component: CocktailComponent },
];
