import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 0;
  count(valueType:string){
    valueType === "add"? this.counter ++ : this.counter --;
  }
  counter2 = 0;
  incriment(){
    if(this.counter2 == 10){
      alert("Counter is 10 please decrease the amount");
      return;
    }
    this.counter2 ++;
  }
  decriment(){
    if(this.counter2 == 0){
      alert("Counter is 0 please increase the amount");
      return;
    }
    this.counter2 --;
  }
}
