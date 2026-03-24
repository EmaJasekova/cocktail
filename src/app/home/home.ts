import { Component, inject } from '@angular/core';
import { CocktailsList } from '../cocktails-list/cocktails-list';
import { DataService, type CocktailData } from '../data.service';

@Component({
  selector: 'app-home',
  imports: [CocktailsList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  dataservice = inject(DataService);
  cocktails: CocktailData[] = [];

  constructor() {
    this.dataservice.getCocktails()
    .subscribe(cocktail => {
      this.cocktails = cocktail;
    });
  }
}
