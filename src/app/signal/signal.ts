import { Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  count = signal(10);
  x=20;

  constructor() {
    effect(() => {
      console.log(this.count());
    })
  }

  updateValue(){
    this.count.set(this.count() + 5);//value of count will update in the template because it is a signal
    // this.x = this.x + 5; //value of x will not update in the template because it is not a signal
  }

}
