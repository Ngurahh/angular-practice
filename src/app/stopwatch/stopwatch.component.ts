import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="counter-container">
      <p class="time">{{ elapsedTime | number : '1.1-1' }} seconds</p>

      <div class="controls">
        <button (click)="startStop()">
          {{ isRunning ? 'Stop' : 'Start' }}
        </button>
        <button (click)="reset()" [disabled]="!elapsedTime">Reset</button>
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
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .time {
        font-size: 2em;
        color: #333;
        margin-bottom: 20px;
      }

      .controls button {
        padding: 10px 20px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .controls button:hover {
        background-color: #0056b3;
      }

      .controls button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `,
  ],
})

export class StopwatchComponent {
  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;

  private start() {
    this.isRunning = true;
    (this.intervalRef = setInterval(() => {
      this.elapsedTime += 1;
    })),
      100;
    console.log('Stopwatch Started');
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch Stopped');
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log('Stopwatch Reset');
  }
}
