import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="counter-container">
      <h2>Counter: {{ count }}</h2>
      <div>
      <button (click)="decrement()">-</button>
      <button (click)="increment()">+</button>
      </div>
      <div [ngSwitch]="status">
        <p *ngSwitchCase="'positive'" [ngStyle]="{color: 'green'}">The Counter Status: {{ status }}</p>
        <p *ngSwitchCase="'neutral'"   [ngStyle]="{color: 'black'}">The Counter Status: {{ status }}</p>
        <p *ngSwitchCase="'negative'" [ngStyle]="{color: 'red'}">The Counter Status: {{ status }}</p>
      </div>
    </div>
  `,
  styles: [`
    .counter-container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      width: 100px;
      height: 50px; 
      margin: 0 5px;
      padding: 5px;
      font-size: 20px
    }

    p {
      margin-top: 10px;
      font-size: 20px;
    }
  `]
})

export class CounterComponent {
  count: number = 0;
  status: string = 'neutral';

  increment() {
    this.count++;
    this.updateStatus();
  }

  decrement() {
    this.count--;
    this.updateStatus();
  }

  updateStatus() {
    if (this.count > 0) {
      this.status = 'positive';
    } else if (this.count < 0) {
      this.status = 'negative';
    } else {
      this.status = 'neutral';
    }
  }
}
