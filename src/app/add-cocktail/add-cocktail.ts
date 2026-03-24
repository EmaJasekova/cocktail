import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Cocktail } from '../cocktail/cocktail';
import { CocktailData, DataService } from '../data.service';

@Component({
  selector: 'app-add-cocktail',
  imports: [ReactiveFormsModule],
  templateUrl: './add-cocktail.html',
  styleUrl: './add-cocktail.css',
})
export class AddCocktail {
  dataservice = inject(DataService);
  
  cocktailForm: FormGroup;

  nameControl = new FormControl<string>('', { nonNullable: true });
  descriptionControl = new FormControl<string>('', { nonNullable: true });
  isAlcoholicControl = new FormControl<boolean>(false);
  imageControl = new FormControl<string>('', { nonNullable: true });

  constructor() {
    this.cocktailForm = new FormGroup
    ({
      name: this.nameControl,
      description: this.descriptionControl,
      isAlcoholic: this.isAlcoholicControl,
      image: this.imageControl,
    });
  }

  submitCocktail() {
    if (this.cocktailForm.valid) {
      const cocktailData = this.cocktailForm.value;
      console.log('Cocktail Data:', cocktailData);
      
      const newCocktail: CocktailData = {
        ...cocktailData,
        id: 0
      };

      this.dataservice.addCocktail(newCocktail);
    }
  }
}
