import { Component, inject } from '@angular/core';
import { CocktailsList } from "../cocktails-list/cocktails-list";
import { CocktailData, DataService } from '../data.service';

@Component({
  selector: 'app-non-alcoholic',
  imports: [CocktailsList],
  templateUrl: './non-alcoholic.html',
  styleUrl: './non-alcoholic.css',
})
export class NonAlcoholic {
  dataservice = inject(DataService);
  nonAlcoholicCocktails: CocktailData[] = [];

  constructor() {
    this.dataservice.getNonAlcoholicCocktails()
    .subscribe(cocktail => {
      this.nonAlcoholicCocktails = cocktail;
    });
  }
}
