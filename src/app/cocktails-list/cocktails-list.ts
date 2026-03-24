import { Component, Input, inject } from '@angular/core';
import { Cocktail } from '../cocktail/cocktail';
import type { CocktailData } from '../data.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cocktails-list',
  imports: [Cocktail],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.css',
})
export class CocktailsList {
  @Input() cocktails: CocktailData[] = [];
  cocktailNameClicked: string = '';

  onCocktailClicked(event: string) {
    console.log('Cocktail clicked:', event);
  }
}
