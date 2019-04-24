import { Component } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';

/**
 * Upload Component
 */
@Component({
  selector: 'gc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  /**
   * Constructor for the Data Service
   * @param dataServ   Instance of the DataService
   */
  constructor(public dataServ: DataService) {}
}
