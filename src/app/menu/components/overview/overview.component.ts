import { Component } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';

/**
 * Overview Component
 */
@Component({
  selector: 'gc-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  /**
   * Constructor for the Data Service
   * @param dataServ   Instance of the DataService
   */
  constructor(public dataServ: DataService) { }

}
