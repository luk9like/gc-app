import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {TabsComponent} from '../../shared/components/tabs/tabs.component';
import {TabComponent} from '../../shared/components/tabs/tab.component';
import {SizeComponent} from '../components/size/size.component';
import {UploadComponent} from '../components/upload/upload.component';
import {OverviewComponent} from '../components/overview/overview.component';

describe('SiderbarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent, TabsComponent, TabComponent, SizeComponent, UploadComponent, OverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
