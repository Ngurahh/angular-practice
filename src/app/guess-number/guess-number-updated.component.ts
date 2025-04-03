import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-guess-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="game-container">
  <h1>Guess the Number Game</h1>
  <p>Guess the number between 1 and 100!</p>

  <div *ngIf="!gameOver">
    <label for="guess">Your Guess:</label>
    <input
      id="guess"
      type="number"
      [(ngModel)]="guessedNumber"
      [disabled]="gameOver"
      min="1"
      max="100"
      placeholder="Enter a number"
    />

    <button (click)="submitGuess()" [disabled]="!isValidGuess(guessedNumber)">
      Submit Guess
    </button>

    <p>Attempts left: {{ attemptsLeft }}</p>
  </div>

  <div *ngIf="feedbackMessage" class="feedback">
    <p>{{ feedbackMessage }}</p>
  </div>

  <div *ngIf="gameOver">
    <button (click)="resetGame()">Play Again</button>
  </div>
</div>
  `,
  styles: [
    `
    .game-container {
      text-align: center;
      margin-top: 50px;
      padding: 20px;
      border: 2px solid #28a745;
      border-radius: 10px;
      background-color: #f8f9fa;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    input[type="number"] {
      width: 60px;
      padding: 10px;
      font-size: 16px;
      border: 2px solid #28a745;
      border-radius: 4px;
      margin-right: 10px;
      transition: border-color 0.3s;
    }

    input[type="number"]:focus {
      border-color: #218838;
      outline: none;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      color: #fff;
      background-color: #28a745;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #218838;
    }

    .feedback {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #dc3545; /* Red color for feedback messages */
    }

    .game-over {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #28a745; /* Green color for win message */
    }
    `
  ]
})

export class GuessNumberComponent {
  secretNumber = this.generateRandomNumber();
  attemptsLeft = 10;
  guessedNumber?: number;
  feedbackMessage = '';
  gameOver = false;

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 10;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessNumberComponent.MAX_NUMBER) + 1;
  }

  public isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessNumberComponent.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Enter a number between 1 and ${GuessNumberComponent.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess(): void {
    if (this.guessedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedbackMessage =
        this.guessedNumber! > this.secretNumber
          ? 'Too High! Try again.'
          : 'Too low! Try again.';
    }
  }

  private endGame(isWin: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin
      ? 'Congratulations! You guessed the correct number!'
      : `Game over! The correct number was ${this.secretNumber}`;
  }

  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessNumberComponent.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }
}
