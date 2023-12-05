import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-bindings',
  templateUrl: './two-way-bindings.component.html',
  styleUrls: ['./two-way-bindings.component.scss']
})
export class TwoWayBindingsComponent {
  title: string = 'Two way data binding - Двухстороннее связывание'

  text: string = 'Введите значение'
  onInput(text: any){
    this.text = text.value
  }

  textTwo: string = 'С использованием ngModule'

}
