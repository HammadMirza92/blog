import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {
  h1Show=true;
  showBlock = false;
  showColor = 'not';
  condition = 'yes';
  showingBloc(val:any){
    if(val === true){
      this.showBlock = false;
      console.log(this.showBlock);

    }else{
      this.showBlock = true;
      console.log(this.showBlock);
    }
  }
}
