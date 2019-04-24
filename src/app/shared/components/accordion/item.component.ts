import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

/**
 * Accordion-Item Component
 */
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
/**
 * @ignore
 */
export class ItemComponent {
  /**
   * Title of Item
   */
  @Input('itemTitle') title: string;
  /**
   * ID of the Item
   */
  @Input('itemId') id: string;
  /**
   * If Collapsed then true
   */
  @Input() collapsed = false;
  /**
   * Icon before the title
   */
  @Input('iconClass') iconClass: string;
  /**
   * Template Reference
   */
  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
