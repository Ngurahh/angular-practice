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
      <li *ngFor="let task of tasks; let i = index">
      {{ task }}
      <button (click)="removeTask(i)">Remove</button>
      </li>
    </ul>
  </div>`,
  styles: [
`
    input {
        width: 90%;
        padding: 8px;
        margin: 5px 0 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    button {
        background-color: #4CAF50;
        color: white;
        padding: 7px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        // margin-left: 10px;
        }
    button:hover {
        background-color: #45a049;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
        padding: 10px;
    }
    
    button {
      background-color: #f44336;
    }

    button:hover {
        background-color: #d32f2f;
    }

    p {
        text-align: center;
        font-style: italic;
        color: #666;

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
