import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  template: `
    <ul *ngFor="let color of colors">
      <li>{{color}}</li>
    </ul>
  `,
})
export class ColorsComponent {

  colors:string[] = ['red', 'green', 'blue'];

}
