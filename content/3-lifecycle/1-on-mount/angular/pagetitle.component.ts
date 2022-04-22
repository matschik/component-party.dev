import { Component } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})

export class PagetitleComponent  {

  pageTitle:string = "";

  ngAfterContentInit():void{
    this.pageTitle = document.title;
  }

}