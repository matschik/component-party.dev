import { Component, ContentChild, NgModule, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-funny-button",
  styles: [
    `
      button {
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        padding: 10px 20px;
        font-size: 30px;
        border: 2px solid #fff;
        margin: 8px;
        transform: scale(0.9);
        box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
        transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;
        outline: 0;
      }
    `,
  ],
  template: `
    <button>
      <ng-container *ngIf="content; else fallback" [ngTemplateOutlet]="content">
      </ng-container>

      <ng-template #fallback>
        <span>No content found</span>
      </ng-template>
    </button>
  `,
})
export class FunnyButtonComponent {
  @ContentChild("content", { read: TemplateRef })
  content?: TemplateRef<unknown>;
}

@NgModule({
  declarations: [FunnyButtonComponent],
  imports: [CommonModule],
  exports: [FunnyButtonComponent],
})
export class FunnyButtonModule {}
