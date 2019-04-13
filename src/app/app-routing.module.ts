import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './menu/sidebar/sidebar.component';
import {FileComponent} from './menu/file/file.component';

const routes: Routes = [
  {path: '', component: SidebarComponent},
  {path: 'upload', component: FileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
