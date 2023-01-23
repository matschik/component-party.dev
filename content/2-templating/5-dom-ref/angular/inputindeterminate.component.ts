import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-inputindeterminate",
  template: `<input type="checkbox" #inputRef />`,
})
export class InputindeterminateComponent implements OnInit {
  @ViewChild("inputRef", { static: true })
  inputRef!: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.inputRef.nativeElement.indeterminate = true;
  }
}
