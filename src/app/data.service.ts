import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Cocktail {
  id: number;
  name: string;
  description: string;
  img: string;
  alcohol: boolean;
}

interface CocktailDto {
  idDrink: string;
  strDrink: string;
  strInstructions: string | null;
  strDrinkThumb: string;
  strAlcoholic: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m';

  getCocktails(): Observable<Cocktail[]> {
    return this.http
      .get<{ drinks: CocktailDto[] | null }>(this.apiUrl)
      .pipe(
        map((response) => (response.drinks ?? []).map(this.mapCocktail))
      );
  }

  getAlcoholicCocktails(): Observable<Cocktail[]> {
    return this.getCocktails().pipe(
      map((cocktails) => cocktails.filter((c) => c.alcohol))
    );
  }

  getNonAlcoholicCocktails(): Observable<Cocktail[]> {
    return this.getCocktails().pipe(
      map((cocktails) => cocktails.filter((c) => !c.alcohol))
    );
  }

  addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return new Observable((observer) => {
      observer.next(cocktail);
      observer.complete();
    });
  }

  private mapCocktail(drink: CocktailDto): Cocktail {
    return {
      id: Number.parseInt(drink.idDrink, 10),
      name: drink.strDrink,
      description: drink.strInstructions ?? '',
      img: drink.strDrinkThumb,
      alcohol: drink.strAlcoholic === 'Alcoholic',
    };
  }
}