import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  standalone: true,
  template: `
  <div class="todo-container">
    <input type="text" [(ngModel)]="newTask" placeholder="Add a new task" (keyup.enter)="addTask()"/>
    <button (click)="addTask()">Add Task</button>
    <p *ngIf="tasks.length === 0">No tasks yet</p>
    <ul>
      <li *ngFor="let task of tasks; let i = index" class="task-item">
        {{ task }}
        <button (click)="removeTask(i)">Remove</button>
      </li>
    </ul>
  </div>`,
  styles: [
    `
    .todo-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        background-color: #f9f9f9;
    }

    input {
        width: 100%;
        padding: 10px;
        margin: 5px 0 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.3s;
    }

    input:focus {
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }

    button {
        background: linear-gradient(90deg, #4CAF50, #45a049);
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background 0.3s;
    }

    button:hover {
        background: linear-gradient(90deg, #45a049, #4CAF50);
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    .task-item {
        margin: 10px 0;
        padding: 10px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.2s;
    }

    .task-item:hover {
        transform: scale(1.02);
    }

    button.remove {
        background-color: #f44336;
    }

    button.remove:hover {
        background-color: #d32f2f;
    }

    p {
        text-align: center;
        font-style: italic;
        color: #666;
    }

    @media (max-width: 600px) {
        .todo-container {
            padding: 10px;
        }

        input {
            font-size: 14px;
        }

        button {
            font-size: 14px;
        }
    }
    `
  ],
})

export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
