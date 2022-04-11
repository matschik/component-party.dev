import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
    <p>Counter: {{count}}</p>
    <button (click)="incrementCount()">+1</button>
  `
})
export class CounterComponent {

  @Input() count:number = 0;
  
  incrementCount():void{
    this.count++;
  }

}
