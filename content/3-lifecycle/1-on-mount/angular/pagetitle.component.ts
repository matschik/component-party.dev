import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})

export class PagetitleComponent implements AfterContentInit  {

  pageTitle:string = "";

  ngAfterContentInit():void{
    this.pageTitle = document.title;
  }

}