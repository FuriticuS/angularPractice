import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.scss']
})
export class DirectiveNgforComponent {
  title: string = 'Директива ngFor'
  arr = [1,1, 3, 5, 8, 12]

  obj = [
    {title: 'Сегодня хороший день', author:"Olga", comments: [
        {name: 'Dima', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Tolya', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Dasha', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Masha', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
      ]},
    {title: 'Сегодня хороший день и очень даже супер', author:"Gena", comments: [
        {name: 'Dolya', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Kesha', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Moisha', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Valya', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
      ]},
    {title: 'Сегодня хороший день и вчера и завтра тоже', author:"Dan", comments: [
        {name: 'Kolya', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Olya', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Misha', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
        {name: 'Sasha', text:'Text terwer tsdgfsd sgdfdgsdf sfdfsdf'},
      ]}
  ]
}
