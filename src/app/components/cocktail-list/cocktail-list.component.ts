import { Component, Input } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../cocktail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { FavoriteToggleComponent } from '../favorite-toggle/favorite-toggle.component';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  imports: [CommonModule, FormsModule, RouterLink, FavoriteToggleComponent],
})
export class CocktailListComponent {
  cocktailsList: Cocktail[] = [];
  filterDrink: string = '';

  constructor(
    private cocktailsService: CocktailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cocktailsService.getCocktails().subscribe((data) => {
      this.cocktailsList = data;
    });
  }

  filteredCocktailsList(): Cocktail[] {
    return this.cocktailsList.filter((drink) =>
      drink.name.toLowerCase().includes(this.filterDrink.toLowerCase())
    );
  }

  viewDetails(id: string): void {
    this.router.navigate(['/cocktail', id]);
  }
}
