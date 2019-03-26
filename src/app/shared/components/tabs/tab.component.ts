import { Component, Input } from '@angular/core';

@Component({
  selector: 'gc-tab',
  styles: [],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
