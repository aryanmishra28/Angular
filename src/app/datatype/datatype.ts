import { Component } from '@angular/core';

@Component({
  selector: 'app-datatype', //we use this selector to use this component in app component in app.html
  imports: [],
  templateUrl: './datatype.html',
  styleUrl: './datatype.css',
})
export class Datatype {   // we import this class in app.ts to use it in app component

  name="Aryan Mishra"
  getName(){
    return this.name; // we use this to access the property of the class, i.e name
  }
  handleClick(){
    alert("Button clicked!");
  }

  // data types
  isLoggedIn: boolean = false; // boolean data type
  userCount: number = 42; // number data type
  userName: string = "John Doe"; // string data type

  myName: any = "Aryan"; // any data type
  check: number | string = 25; // union data type

  dataType(){
    this.isLoggedIn = true; // assigning boolean value
    this.userCount = 100;

    this.check = "Now I'm a string"; // changing union type value
  }

  sum(a: number, b: number){
    console.log(a + b); // function with number data type
  }

}
