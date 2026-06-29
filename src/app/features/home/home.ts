import { Component, input } from '@angular/core';
import { Greeting } from '../../shared/components/greeting/greeting';
import { Counter } from '../../shared/components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // =====================================================
  // Input Signals
  // =====================================================
  homeData = input('Text data passed from Home Component');

  // =====================================================
  // State
  // =====================================================
  username = '';
  isLoading = false;

  // =====================================================
  // Constructor / Dependency Injection
  // =====================================================
  constructor() {}

  // =====================================================
  // Lifecycle Hooks
  // =====================================================
  ngOnInit() {}

  // =====================================================
  // Public Methods
  // =====================================================
  save() {}

  reset() {}

  // =====================================================
  // Event Handlers
  // =====================================================
  onKeyUp() {
    console.log('User typed something.');
  }

  onSubmit() {}

  // =====================================================
  // Private Helper Methods
  // =====================================================
  private validateInput() {}

  private formatName() {}
}
