import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})

export class TimeComponent  {
  
  @Input() time:string = new Date().toLocaleTimeString();
  timer:number;
  
  constructor(){
    this.timer = window.setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
  
  ngOnDestroy():void{
    window.clearInterval(this.timer);
  }

}