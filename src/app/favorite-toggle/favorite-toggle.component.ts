import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-toggle.component.html',
  styleUrl: './favorite-toggle.component.scss',
})
export class FavoriteToggleComponent implements OnInit {
  @Input() itemId: string; // ID of the item to toggle
  isFavorite: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.isFavorite = this.checkIfFavorite(this.itemId);
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.updateFavorites();
  }

  private checkIfFavorite(itemId: string): boolean {
    console.log('checkIfFavorite' + itemId);
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    return favorites.includes(itemId);
  }

  private updateFavorites(): void {
    let favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    if (this.isFavorite) {
      if (!favorites.includes(this.itemId)) {
        favorites.push(this.itemId);
      }
    } else {
      favorites = favorites.filter((id) => id !== this.itemId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
