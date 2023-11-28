import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolyaciya',
  templateUrl: './interpolyaciya.component.html',
  styleUrls: ['./interpolyaciya.component.scss']
})
export class InterpolyaciyaComponent {
  title: string = "Интерполяция";
  num: number = 99;
  arr= [1,2,3];

  obj = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4
    }
  }
}
