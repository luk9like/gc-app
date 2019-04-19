import {Component, ContentChildren, QueryList, AfterContentInit, TemplateRef, ContentChild} from '@angular/core';
import { ItemComponent } from './item.component';
import {NgForOfContext} from '@angular/common';

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

  @ContentChildren(ItemComponent) items: QueryList<ItemComponent>;

  ngAfterContentInit() {
    // get all active tabs
    const collapsedItem = this.items.filter((item) => item.collapsed);

    // if there is no active tab set, activate the first
    if ( collapsedItem.length === 0 ) {
      this.selectItem(this.items.first);
    }
  }

  selectItem(item: ItemComponent) {
    // deactivate all tabs
    this.items.toArray().forEach( item => item.collapsed = false);

    // activate the tab the user has clicked on.
    item.collapsed = true;
  }
}
