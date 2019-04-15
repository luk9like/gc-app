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
  private allowed_ext: Array<string> = ['image/png'];
  localUrl: any[];
  private fileList: Array<File> = [];

  constructor(public three: ThreeService, public DataServ: DataService) {}

  onFileSelected(event: any) {
    let ext = event.target.files[0].type;

    if ( this.allowed_ext.includes(ext)) {
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

    } else {
      alert('Falsches Dateiformat! Bitte wähle eine .png-Datei aus.');
    }
  }

  public hasBaseDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  onFilesChange(fileList: Array<File>) {
    this.DataServ.state = true;
    this.fileList = fileList;
    console.log(fileList[0]);
    this.DataServ.designName = fileList[0].name;
    this.DataServ.designSize = '' + fileList[0].size;
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
