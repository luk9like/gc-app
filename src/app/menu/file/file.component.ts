import {Component, Input} from '@angular/core';
import {ThreeService} from '../../scene/service/three.service';
import {DataService} from '../../shared/service/data.service';
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

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
    this.DataServ.selectedImage = window.URL.createObjectURL(fileList[0]);
  }

}
