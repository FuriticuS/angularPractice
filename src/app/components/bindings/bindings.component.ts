import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  title: string = 'Bindings - механизм привязки из ts в HTML'
  img: string = 'assets/img/angular.png';

  constructor() {
    setTimeout(()=> {this.img = 'assets/img/react.png'}, 2000);
  }
}
