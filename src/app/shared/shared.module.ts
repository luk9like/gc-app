import { NgModule } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [TabsComponent, TabComponent]
})
export class SharedModule { }
