import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { SizeComponent } from './components/size/size.component';
import { UploadComponent } from './components/upload/upload.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { FileComponent } from './file/file.component';
import {RouterModule} from '@angular/router';
import { DragDropDirective } from './file/DragDrop/drag-drop.directive';
import { SelectDirective } from './file/Select/select.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [OverviewComponent, SizeComponent, UploadComponent, SidebarComponent, FileComponent, DragDropDirective, SelectDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [SidebarComponent]
})
export class MenuModule { }
