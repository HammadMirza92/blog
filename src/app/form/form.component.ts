import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myData:any = '';
  getData(data:NgForm){
    console.log(data);
    this.myData = data;
  }
}
