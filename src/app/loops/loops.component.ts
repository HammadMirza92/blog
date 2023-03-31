import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent {
  users = ['demo 1','demo 2','demo 3','demo 4','demo 5','demo 6','demo 7'];
  userDetail=[
    {
      name: 'demo 1',
      icon: "https://img.freepik.com/premium-vector/gradient-business-investment-logo-design_269830-887.jpg?w=2000",
      title: "Marketing Manager",
      vacancy: 20,
    },
    {
      name: 'demo 2',
      icon: "https://img.freepik.com/premium-vector/gradient-business-investment-logo-design_269830-887.jpg?w=2000",
      title: "Marketing Manager 2",
      vacancy: 20,
    },
    {
      name: 'demo 3',
      icon: "https://img.freepik.com/premium-vector/gradient-business-investment-logo-design_269830-887.jpg?w=2000",
      title: "Marketing Managerc 3",
      vacancy: 20,
    },
    {
      name: 'demo 4',
      icon: "https://img.freepik.com/premium-vector/gradient-business-investment-logo-design_269830-887.jpg?w=2000",
      title: "Marketing Manager 4",
      vacancy: 20,
    },
  ]
}
