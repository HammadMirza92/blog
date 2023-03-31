import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.css']
})
export class DynamicStyleComponent {
  color = 'red';
  bgcolor= 'green';

  changeColor(){
    this.color = 'green';
    this.bgcolor= 'red';

  }
}
