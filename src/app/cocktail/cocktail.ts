import { Component, Input } from '@angular/core';
import { CocktailData } from '../data.service';

@Component({
  selector: 'app-cocktail',
  imports: [],
  templateUrl: './cocktail.html',
  styleUrl: './cocktail.css',
})
export class Cocktail {
  @Input() cocktail: CocktailData = { id: 0, name: '', description: '', img: '', alcohol: false };
}
