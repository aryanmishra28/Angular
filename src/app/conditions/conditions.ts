import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  imports: [],
  templateUrl: './conditions.html',
  styleUrl: './conditions.css',
})
export class Conditions {
  display=true;

  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display; //if hidden then show else hide
  }

  toggleDiv=true;
  toggleTwo(){
    this.toggleDiv=!this.toggleDiv;
  }
}
