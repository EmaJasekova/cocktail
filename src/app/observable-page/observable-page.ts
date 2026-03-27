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
  subscription: Subscription | null = null;

  startObservable() {
    if (!this.subscription) {
      this.subscription = interval(1000).subscribe((value) => {
        this.value = value;
      });
    }
  }

  stopObservable() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null; // or we can use the closed property
    }
  }
}
