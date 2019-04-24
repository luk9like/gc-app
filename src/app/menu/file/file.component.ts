import {Component} from '@angular/core';
import {DataService} from '../../shared/service/data.service';

/**
 * File Component
 */
@Component({
  selector: 'gc-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {

  /**
   * Constructor for the Data Service
   * @param data   Instance of the DataService
   */
  constructor(public data: DataService) {}

  /**
   * If file was selected or droped, the funtion save it to the DataService
   *
   * Save the file as BLOB URL
   * [BLOB URL]{@link https://developer.mozilla.org/de/docs/Web/API/URL/createObjectURL}
   * @param fileList   The selected File as Array
   */
  onFilesChange(fileList: Array<File>) {
    this.data.state = true;
    this.data.designName = fileList[0].name;
    this.data.designSize = fileList[0].size;
    this.data.selectedImage = window.URL.createObjectURL(fileList[0]) || (<any>window).webkitURL.createObjectURL(fileList[0]);
    console.log('Create Blob: ' + this.data.selectedImage);

  }

  /**
   * Check the State
   * @return string   The class for Disable a <a>-Tag
   */
  public isDisabled() {
    if (this.data.state) {
      return;
    } else {
      return 'disabled';
    }
  }

  /**
   * Set the Input-File Label
   * @return designName   The Name of the uploaded File
   */
  public showInputLabel() {
    if (this.data.designName === undefined ) {
      return 'Design auswählen';
    } else {
      return this.data.designName;
    }
  }

}
