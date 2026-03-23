import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  imports: [],
  templateUrl: './cocktail.html',
  styleUrl: './cocktail.css',
})
export class Cocktail {
  @Input() cocktail: any;
}
