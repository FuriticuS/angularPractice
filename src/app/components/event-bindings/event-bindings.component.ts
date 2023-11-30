import {Component} from '@angular/core';

@Component({
    selector: 'app-event-bindings',
    templateUrl: './event-bindings.component.html',
    styleUrls: ['./event-bindings.component.scss']
})
export class EventBindingsComponent {
    title: string = "Event bindings - механизм привязки из HTML в TS"
    keyboardEvent: string = 'KeyboardEvent и <HTMLInputElement>event в TS: '
    keyboardEventEnter: string = 'KeyboardEvent и <HTMLInputElement>event в TS событие по нажатию на Enter: '
    inputValue: any = ''
    inputValueTwo: any = ''
    inputValueThree: any = ''
    clickInputValue: any = ''

    onInput(event: any) {
        this.inputValue = event.target.value;
    }

    clickInput(event: any) {
        event.preventDefault();
        this.clickInputValue = 'Пользователь ввел:' + ' ' + this.inputValue
    }

    onInputTwo(event: KeyboardEvent) {
        this.inputValueTwo = (<HTMLInputElement>event.target).value
    }

    onInputThree(inputValue: any) {
        this.inputValueThree = inputValue
    }

    onBlur(str: string){
      this.inputValueThree = str;
    }
}
