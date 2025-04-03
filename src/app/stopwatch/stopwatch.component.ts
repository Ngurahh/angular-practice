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
        padding: 30px;
        background-color: #e0f7fa;
        border-radius: 15px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
      }

      .counter-container:hover {
        transform: scale(1.02);
      }

      .time {
        font-size: 3em;
        color:rgb(72, 94, 91);
        margin-bottom: 25px;
        font-weight: bold;
      }

      .controls button {
        padding: 12px 25px;
        margin: 5px;
        border: none;
        border-radius: 8px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        font-size: 1.1em;
      }

      .controls button:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
      }

      .controls button:active {
        transform: translateY(1px);
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
    })), 100;
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
