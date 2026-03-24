import { Component, inject } from '@angular/core';
import { CocktailData, DataService } from '../data.service';
import { CocktailsList } from '../cocktails-list/cocktails-list';

@Component({
  selector: 'app-alcoholic',
  imports: [CocktailsList],
  templateUrl: './alcoholic.html',
  styleUrl: './alcoholic.css',
})
export class Alcoholic {
  dataservice = inject(DataService);
  alcoholicCocktails: CocktailData[] = [];

  constructor() {
    this.dataservice.getAlcoholicCocktails()
    .subscribe(cocktail => {
      this.alcoholicCocktails = cocktail;
    });
  }
}
