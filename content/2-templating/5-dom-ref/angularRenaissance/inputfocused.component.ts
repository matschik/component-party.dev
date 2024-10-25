import { Component, ElementRef, OnInit, viewChild } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-inputfocused",
  template: `<input type="text" #inputRef />`,
})
export class InputfocusedComponent implements OnInit {
  inputRef = viewChild.required<ElementRef<HTMLInputElement>>("inputRef");

  ngOnInit() {
    this.inputRef().nativeElement.focus();
  }
}
