import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CocktailListComponent, CocktailComponent, RouterModule],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
