import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.html',
  styleUrl: './loop.css',
})
export class Loop {
users=["Aryan","Ankit","Rohan","Sohan"];

students=[
  {name:"Aryan",age:21},
  {name:"Ankit",age:22},
  {name:"Rohan",age:20},
  {name:"Sohan",age:23}
];

getName( name:string ){
  console.log(name);
}
}
