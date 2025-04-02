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
        <p *ngSwitchCase="'positive'" [ngClass]="'positive'">
          The Counter Status: {{ status }}
        </p>
        <p *ngSwitchCase="'neutral'" [ngClass]="'neutral'">
          The Counter Status: {{ status }}
        </p>
        <p *ngSwitchCase="'negative'" [ngClass]="'negative'">
          The Counter Status: {{ status }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
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
        font-size: 20px;
      }

      button:hover {
        background-color: #000;
        color: #fff;
      }
      p {
        margin-top: 10px;
        font-size: 20px;
      }

      p.positive {
        color: #28a745;
        font-weight: bold;
        font-size: 1.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        animation: glow 1.5s infinite;
      }

      p.neutral {
        color: #6c757d;
        font-style: italic;
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        border: 2px dashed #6c757d;
        padding: 5px;
      }

      p.negative {
        color: #dc3545;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: underline;
        background-color: rgba(220, 53, 69, 0.1);
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 0 10px rgba(220, 53, 69, 0.5);
      }

      @keyframes glow {
        0% {
          text-shadow: 0 0 5px #28a745, 0 0 10px #28a745, 0 0 15px #28a745;
        }
        50% {
          text-shadow: 0 0 10px #28a745, 0 0 20px #28a745, 0 0 25px #28a745;
        }
        100% {
          text-shadow: 0 0 5px #28a745, 0 0 10px #28a745, 0 0 15px #28a745;
        }
      }
    `,
  ],
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
