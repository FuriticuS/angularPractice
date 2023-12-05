import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-class',
  templateUrl: './directive-class.component.html',
  styleUrls: ['./directive-class.component.scss']
})
export class DirectiveClassComponent {
  title: string = 'Директива - ngClass';

  classBlock: boolean = true;
  classBlockTwo: boolean = true;

  classBlockToggle(){
    this.classBlockTwo = !this.classBlockTwo;
  }
}
