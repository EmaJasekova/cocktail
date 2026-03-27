import { Component } from '@angular/core';
import { interval, Subscription, map, filter } from 'rxjs';

@Component({
  selector: 'app-observable-page',
  imports: [],
  templateUrl: './observable-page.html',
  styleUrl: './observable-page.css',
})
export class ObservablePage {
  value: string = "Value: 0";
  subscription: Subscription | null = null;

  startObservable() {
    if (!this.subscription) {
      this.subscription = interval(1000).pipe(
        filter((value: number) => value > 2),
        map((value: number) : number => value * 10),
        map((value: number) : string => "Value: " + value)
      ).subscribe({
        next: (value: string) => this.value = value
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
