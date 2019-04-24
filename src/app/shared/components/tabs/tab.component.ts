import { Component, Input } from '@angular/core';

/**
 * Tab-Item Component
 */
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
  /**
   * The title of the Tab
   */
  @Input('tabTitle') title: string;
  /**
   * Saves the active-state of the Tab
   */
  @Input() active = false;
}
