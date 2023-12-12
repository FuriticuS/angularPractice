import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-if-else',
  templateUrl: './directive-if-else.component.html',
  styleUrls: ['./directive-if-else.component.scss']
})
export class DirectiveIfElseComponent {
  title: string = 'Директива if и else'
  toggleIf: boolean = true
  toggleIfElse:boolean = true
  toggleSwitch: any = true
  toggleBtn(){
    this.toggleIf = !this.toggleIf;
  }

  toggleBtnTwo(){
    this.toggleIfElse = !this.toggleIfElse;
  }

  toggleTree(){
    this.toggleSwitch = !this.toggleSwitch;
  }
}
