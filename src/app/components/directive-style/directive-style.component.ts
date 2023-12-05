import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-style',
  templateUrl: './directive-style.component.html',
  styleUrls: ['./directive-style.component.scss']
})
export class DirectiveStyleComponent {
  title: string = 'Директива - ngStyle'

  divToggle: boolean = true
}
