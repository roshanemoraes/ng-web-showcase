import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // Signals
  counterValue = signal(0);

  // Event Handlers
  onIncrement() {
    // this.counterValue.set(this.counterValue() + 1);
    this.counterValue.update((value) => value + 1);
    console.log(this.counterValue);
  }
  
  onDecrement() {
    if (this.counterValue() <= 0) return;
    this.counterValue.update((value) => value - 1);
  }
  
  onReset() {
    // this.counterValue.update(() => 0);
    this.counterValue.set(0);
  }
}
