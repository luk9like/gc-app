import {Component} from '@angular/core';
import {DataService} from '../../shared/service/data.service';

@Component({
  selector: 'gc-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {

  constructor(public data: DataService) {}

  onFilesChange(fileList: Array<File>) {
    this.data.state = true;
    this.data.designName = fileList[0].name;
    this.data.designSize = '' + fileList[0].size;
    this.data.selectedImage = window.URL.createObjectURL(fileList[0]) || (<any>window).webkitURL.createObjectURL(fileList[0]);
    console.log('Create Blob: ' + this.data.selectedImage);

  }

}
