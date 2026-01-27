import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login'; // Importing Login component

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21');
  name="Aryan Mishra"
  getName(){
    return this.name; // we use this to access the property of the class, i.e name
  }
}
