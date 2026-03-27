import { Component, OnInit } from '@angular/core';
import { interval, Subscription, map, filter, take, range, toArray } from 'rxjs';
import { ProducerComponent } from '../producer-component/producer-component';
import { ListenerComponent } from '../listener-component/listener-component';

@Component({
  selector: 'app-observable-page',
  imports: [ProducerComponent, ListenerComponent],
  templateUrl: './observable-page.html',
  styleUrl: './observable-page.css',
})
export class ObservablePage implements OnInit {
  value: string = "Value: 0";
  letters: string[] = [];
  stopwatch: Subscription | null = null;

  ngOnInit() {
    range(0, 26).pipe(
      map((value: number) : string => String.fromCharCode(65 + value)),
      toArray()
    ).subscribe({
      next: (value: string[]) => this.letters = value
    })
  }

  startObservable() {
    if (!this.stopwatch) {
      this.stopwatch = interval(1000).pipe(
        filter((value: number) : boolean => value > 2),
        take(2),
        map((value: number) : number => value * 10),
        map((value: number) : string => "Value: " + value),
      ).subscribe({
        next: (value: string) => this.value = value
      });
    }
  }

  stopObservable() {
    if (this.stopwatch) {
      this.stopwatch.unsubscribe();
      this.stopwatch = null; // or we can use the closed property
    }
  }
}
