import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {

    handleEvent(event: any) {
    console.log(event.type);
    console.log("value:", event.target.value);
  }

  name: string = '';
  getName(event: any) {
    console.log(event.target.value); // to get value from input box
    this.name = event.target.value;
    // this.name = (event.target as HTMLInputElement).value; // type casting
  }
  setName:string = '';
  displayName() {
    this.setName = this.name; // getting value from name property and display when button is clicked
  }

}
