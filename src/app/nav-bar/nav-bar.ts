import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  letters: string[] = [];
  @Output() letterClicked = new EventEmitter<string>();
  @Output() allClicked = new EventEmitter<void>();

  constructor() {
    for (let i=0; i<26; i++) {
      this.letters.push(String.fromCharCode(65 + i));
    }
  }

  onLetterClicked(letter: string) {
    this.letterClicked.emit(letter);
  }

  onAllClicked() {
    this.allClicked.emit();
  }
}
