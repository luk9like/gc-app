import { Component } from '@angular/core';
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
  localUrl: any[];
  private fileList: any = [];

  constructor(public three: ThreeService, public DataServ: DataService) {}

  onFileSelected(event: any) {
    const input: HTMLElement = document.getElementById('design');
      this.DataServ.designName = event.target.files[0].name;
      this.DataServ.designSize = event.target.files[0].size;
    this.DataServ.state = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.DataServ.selectedImage = event.target.result;
        console.log(this.DataServ.selectedImage);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public hasBaseDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  onFilesChange(fileList) {
    this.DataServ.state = true;
    this.fileList = fileList;
    console.log(fileList[0]);
    this.DataServ.designName = fileList[0].name;
    this.DataServ.designSize = fileList[0].size;
    this.getBase64(fileList[0]).then(
      data => this.DataServ.selectedImage = data
    );
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

}
