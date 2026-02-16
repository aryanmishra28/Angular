import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  taskInput: string = '';
  tasks: string[] = [];

  input(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.taskInput = target?.value ?? '';
  }

  addTask() {
    const value = this.taskInput.trim();
    if (value) {
      this.tasks.push(value);
      this.taskInput = '';
    }
  }
}
