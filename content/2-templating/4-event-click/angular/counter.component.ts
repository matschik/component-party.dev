import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl:"./counter.component.html"
})

export class CounterComponent {

  @Input() count:number = 0;
  
  incrementCount():void{
    this.count++;
  }

}