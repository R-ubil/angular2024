import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cocktail } from '../../cocktail';
import { FavoriteToggleComponent } from '../../favorite-toggle/favorite-toggle.component';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss',
  imports: [RouterLink, CommonModule, FavoriteToggleComponent],
})
export class CocktailComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor(
    private route: ActivatedRoute,
    private cocktailsService: CocktailsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('cocktailId')!;
    this.cocktailsService.getCocktailById(id).subscribe((data) => {
      this.cocktail = data;
    });
  }
}
