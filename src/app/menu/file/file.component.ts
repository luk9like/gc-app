import {Component} from '@angular/core';
import {ThreeService} from '../../scene/service/three.service';
import {DataService} from '../../shared/service/data.service';
import * as blobUtils from 'blob-util';

@Component({
  selector: 'gc-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {

  constructor(public three: ThreeService, public DataServ: DataService) {}

  onFilesChange(fileList: Array<File>) {
    this.DataServ.state = true;
    this.DataServ.designName = fileList[0].name;
    this.DataServ.designSize = '' + fileList[0].size;
    this.DataServ.selectedImage = window.URL.createObjectURL(fileList[0]) || (<any>window).webkitURL.createObjectURL(fileList[0]);
    console.log('Create Blob: ' + this.DataServ.selectedImage);

  }

}
