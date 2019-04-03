import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'gc-tabs',
  template: `
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item" *ngFor="let tab of tabs" (click)="selectTab(tab)">
        <a [class.active]="tab.active" class="nav-link nav-title" href="#"><span class="mr-3 mdi mdi-gauge"></span>{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: []
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if ( activeTabs.length === 0 ) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach( tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
