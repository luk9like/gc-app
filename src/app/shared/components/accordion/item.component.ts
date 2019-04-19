import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'gc-item',
  styles: [],
  template: `
    <li class="nav-item">
      <a [class.active]="collapsed"
         class="nav-link d-flex align-items-center collapsed"
         data-toggle="collapse"
         [href]="'#' + id"
         [attr.aria-expanded]="collapsed"
         [attr.aria-controls]="id">
        <span class="mr-5 mdi" [ngClass]="iconClass"></span>
        {{title}}
      </a>
      <div class="collapse" [class.show]="collapsed" id="{{id}}" data-parent="#accordion">
        <ng-content></ng-content>
      </div>
    </li>
  `
})
export class ItemComponent {
  @Input('itemTitle') title: string;
  @Input('itemId') id: string;
  @Input() collapsed = false;
  @Input('iconClass') iconClass: string;
  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
