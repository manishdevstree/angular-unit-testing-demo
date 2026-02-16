import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ count }}</h2>
    <button (click)="increment()">Increase</button>
    <button (click)="decrement()">Decrease</button>
  `
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
