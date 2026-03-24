import { Component, inject, Input } from '@angular/core';
import { CocktailsList } from '../cocktails-list/cocktails-list';
import { DataService, type CocktailData } from '../data.service';
import { NavBar } from '../nav-bar/nav-bar';
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-home',
  imports: [CocktailsList, NavBar, SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  dataservice = inject(DataService);

  allCocktails: CocktailData[] = [];
  filteredCocktails: CocktailData[] = [];

  constructor() {
    this.dataservice.getCocktails()
    .subscribe(cocktails => {
      this.filteredCocktails = cocktails;
      this.allCocktails = cocktails;
    });
  }
  
  onLetterClicked(letter: string) {
    console.log('Letter clicked in Home component:', letter);

    this.filteredCocktails = this.allCocktails.filter(cocktail => cocktail.name.startsWith(letter));
  }

  onAllClicked() {
    this.filteredCocktails = this.allCocktails;
  }

  onSearchSubmitted(searchTerm: string) {
    console.log('Search term received in Home component:', searchTerm);

    this.filteredCocktails = this.allCocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
