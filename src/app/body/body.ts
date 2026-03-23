import { Component, Input } from '@angular/core';
import { CocktailsList } from '../cocktails-list/cocktails-list';
import type { CocktailData } from '../data.service';

@Component({
  selector: 'app-body',
  imports: [CocktailsList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  @Input() cocktails: CocktailData[] = [];
}
