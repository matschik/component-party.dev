import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  NgModule,
} from "@angular/core";

@Component({
  selector: "app-inputfocused",
  template: `<input type="text" #inputRef />`,
})
export class InputfocusedComponent implements OnInit {
  @ViewChild("inputRef", { static: true })
  inputRef!: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.inputRef.nativeElement.focus();
  }
}

@NgModule({
  declarations: [InputfocusedComponent],
  exports: [InputfocusedComponent],
})
export class InputfocusedModule {}
