import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';

const TRAFFIC_LIGHTS = ['red', 'orange', 'green'];

@Pipe({
  name: 'light'
})
export class TrafficLightPipe implements PipeTransform {
  transform(value: number): string { 
    return TRAFFIC_LIGHTS[value];
  }
}

@Component({
  selector: 'app-trafficlight',
  template:`
      <button (click)="nextLight()">Next light</button>
			<p>Light is: {{lightIndex | light}}</p>
			<p>
				You must
        <span *ngIf=" (lightIndex | light) === 'red' ">STOP</span>
        <span *ngIf=" (lightIndex | light) === 'orange' ">SLOW DOWN</span>
        <span *ngIf=" (lightIndex | light) === 'green' ">GO</span>
			</p>
  `
})
export class TrafficlightComponent  {

  @Input() lightIndex:number = 0;

  nextLight():void{
    if (this.lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
			this.lightIndex = 0
		} else {
			this.lightIndex++
		}
  }

}
