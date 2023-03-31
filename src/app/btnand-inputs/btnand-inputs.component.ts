import { Component } from '@angular/core';

@Component({
  selector: 'app-btnand-inputs',
  templateUrl: './btnand-inputs.component.html',
  styleUrls: ['./btnand-inputs.component.css']
})
export class BtnandInputsComponent {
  
  getName(name:string){
    alert(name);
  }
  getData(val:string){
    console.log(val)
  }
  displayval = "";
  printName(val:string){
    console.log(val);
    this.displayval =val;
  }
  
  
}
