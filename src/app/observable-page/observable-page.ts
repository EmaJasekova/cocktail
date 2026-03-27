import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-page',
  imports: [],
  templateUrl: './observable-page.html',
  styleUrl: './observable-page.css',
})
export class ObservablePage {
  value: number = 0;
  subscription?: Subscription;

  startObservable() {
    this.subscription = interval(1000).subscribe((value) => {
      this.value = value;
    });
  }

  stopObservable() {
    this.subscription?.unsubscribe();
  }
}
