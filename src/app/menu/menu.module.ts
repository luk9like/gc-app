import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { SizeComponent } from './components/size/size.component';
import { UploadComponent } from './components/upload/upload.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OverviewComponent, SizeComponent, UploadComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SidebarComponent]
})
export class MenuModule { }
