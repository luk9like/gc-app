import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { ItemComponent } from './item.component';

/**
 * Accordion Component
 */
@Component({
  selector: 'gc-accordion',
  template: `
    <ul class="nav flex-column">
      <ng-container *ngFor="let item of items" (click)="selectItem(item)">
        <ng-content></ng-content>
      </ng-container>
    </ul>
  `,
  styles: []
})
export class AccordionComponent implements AfterContentInit {

  /**
   * List of all Accordion-Items in the template
   */
  @ContentChildren(ItemComponent) items: QueryList<ItemComponent>;

  /**
   * @ignore
   */
  ngAfterContentInit() {
    // get all active tabs
    /**
     * collapsed items
     */
    const collapsedItem = this.items.filter((item) => item.collapsed);

    // if there is no active tab set, activate the first
    if ( collapsedItem.length === 0 ) {
      this.selectItem(this.items.first);
    }
  }

  /**
   * @param item    The selected Accordion-Item
   * Collapse the selected Item
   */
  selectItem(item: ItemComponent) {
    // deactivate all tabs
    this.items.toArray().forEach( item => item.collapsed = false);

    // activate the tab the user has clicked on.
    item.collapsed = true;
  }
}
