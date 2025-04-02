import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CounterComponent, CommonModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name : string = "Babi";
  address : string = "Jl. Imam Bonjol";
  phone : string = "081234567890";
}

