import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  img: string = 'assets/img/angular.png';

  constructor() {
    setTimeout(()=> {this.img = 'assets/img/react.png'}, 2000);
  }
}
