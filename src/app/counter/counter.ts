import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;
  increase(){
    this.count++;
  }
  decrease(){
    this.count--;
  }
  reset(){
    this.count = 0;
  }

  // Alternate method to handle counter actions in a single method
  handleCounter(val: string){
    if(val === 'inc'){
      this.count++;
    }
    else if(val === 'dec' && this.count > 0){ // to prevent negative count
      this.count--;
    }
    else{
      this.count = 0;
    }
  }

}
