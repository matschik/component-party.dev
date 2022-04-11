import { Component } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  template:`
    <h1 class="title">Hello world</h1>
    <button style="font-size:10rem">I am a button</button>
  `,
  styles:[" .title {color: red} "]
})

export class HelloworldComponent{}
