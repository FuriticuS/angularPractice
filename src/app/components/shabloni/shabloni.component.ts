import { Component } from '@angular/core';

@Component({
  selector: 'app-shabloni',
  template:`
    <div>
      <p>Применение шаблона внутри ts компонента без файлов html и scss</p>
    </div>
  `,
  styles: [`
    h1 {font-size: 24px; font-weight: 500;}
  `]
})
export class ShabloniComponent {}
