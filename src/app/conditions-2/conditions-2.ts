import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions-2',
  imports: [],
  templateUrl: './conditions-2.html',
  styleUrl: './conditions-2.css',
})
export class Conditions2 {
  color=1;
  change(val:number){
    this.color=val;
  }
  handleInput(event:number | any){
    this.color=Number(event.target.value);
  }

}
