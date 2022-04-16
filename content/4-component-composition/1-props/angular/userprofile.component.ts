import { Component, Input } from '@angular/core';

interface UserprofileComponentProps{
  name:string,
  age:number,
  favouriteColors:string[],
  isAvailable:boolean 
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})

export class UserprofileComponent implements UserprofileComponentProps {
  @Input() name:string = "";
  @Input() age:number = 0;
  @Input() favouriteColors:string[] = []
  @Input() isAvailable:boolean = false
}
