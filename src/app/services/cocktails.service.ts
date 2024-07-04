import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private baseUrl = '/cockails';
  constructor(private http: HttpClient) {}

  //call API to get the full list of drinks
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.baseUrl);
  }

  //call API to get a drink by ID
  getCocktailById(cocktailId: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}/${cocktailId}`);
  }
}
