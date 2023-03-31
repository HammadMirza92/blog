import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedloops',
  templateUrl: './nestedloops.component.html',
  styleUrls: ['./nestedloops.component.css']
})
export class NestedloopsComponent {
  userDetail=[
    {
      name: 'demo 1',
      title: "Marketing Manager",
      vacancy: 20,
      MediaAccounts:[{
        account1:'faceBook 1' ,
        account2:'instagram 1' , 
        account3:'snapchat 1', 
        account4:'whatsapp 1'
      }]
    },
    {
      name: 'demo 2',
      title: "Marketing Manager 2",
      vacancy: 20,
      MediaAccounts:[{
        account1:'faceBook 2' ,
        account2:'instagram 2' , 
        account3:'snapchat 2', 
        account4:'whatsapp 2'
      }]
    },
    {
      name: 'demo 3',
      title: "Marketing Managerc 3",
      vacancy: 20,
      MediaAccounts:[{
        account1:'faceBook 3' ,
        account2:'instagram 3' , 
        account3:'snapchat 3', 
        account4:'whatsapp 3'
      }]
    },
    {
      name: 'demo 4',
      title: "Marketing Manager 4",
      vacancy: 20,
      MediaAccounts:[{
        account1:'faceBook 4' ,
        account2:'instagram 4' , 
        account3:'snapchat 4', 
        account4:'whatsapp 4'
      }]
    },
  ]
}
