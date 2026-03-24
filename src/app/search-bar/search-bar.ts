import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchForm: FormGroup;
  subscription: Subscription;
  @Output() searchSubmitted = new EventEmitter<string>();
  
  searchControl = new FormControl<string>('',
    {
      validators: [Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')],
      nonNullable: true
    });

  constructor() {
    this.searchForm = new FormGroup({
      search: this.searchControl
    });

    this.subscription = this.searchControl.valueChanges.subscribe(
      (searchTerm) => 
        this.searchSubmitted.emit(searchTerm)
    );
  }

  // submitSearch() {
  //   const searchTerm = this.searchControl.value;
  //   console.log('Search term submitted:', searchTerm);
  //   this.searchSubmitted.emit(searchTerm);
  // }
  
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
