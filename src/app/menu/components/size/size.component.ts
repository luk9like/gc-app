import { Component } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';

/**
 * Size Component
 */
@Component({
  selector: 'gc-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent {
  /**
   * All available Sizes of Cups
   */
  sizes: Array<string> = ['small', 'medium', 'normal', 'large'];

  /**
   * Constructor for the Data Service
   * @param data   Instance of the DataService
   */
  constructor(private data: DataService) {}

}
