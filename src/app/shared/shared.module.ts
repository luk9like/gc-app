import { NgModule } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from './components/accordion/accordion.component';
import {ItemComponent} from './components/accordion/item.component';

@NgModule({
  declarations: [TabsComponent, TabComponent, AccordionComponent, ItemComponent],
  imports: [
    CommonModule
  ],
  exports: [TabsComponent, TabComponent, AccordionComponent, ItemComponent]
})
export class SharedModule { }
