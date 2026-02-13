import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login'; // Importing Login component
import { Datatype } from './datatype/datatype';
import { Counter } from './counter/counter';
import { Event } from './event/event';
import { Conditions } from './conditions/conditions';
import { Conditions2 } from './conditions-2/conditions-2';
import { Loop } from "./loop/loop";
import { Signal } from './signal/signal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Event, Conditions, Conditions2, Loop, Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21');

}
