import { Component, inject } from '@angular/core';
import { CocktailsList } from '../cocktails-list/cocktails-list';
import { DataService, type CocktailData } from '../data.service';

@Component({
  selector: 'app-body',
  imports: [CocktailsList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  dataservice = inject(DataService);
  cocktails: CocktailData[] = [];

  constructor() {
    this.dataservice.getCocktails()
    .subscribe(cocktail => {
      this.cocktails = cocktail;
    });
  }
}
