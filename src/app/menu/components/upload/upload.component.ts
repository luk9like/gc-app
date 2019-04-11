import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';

@Component({
  selector: 'gc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  name: string;
  constructor(public dataServ: DataService) {
    console.log(dataServ);
    this.name = dataServ.test;
  }
  ngOnInit() {
  }
  /*public imagePath;
  imgURL: any;
  public message: string;

  public preview(): void  {
    let files: Array<Blob>;
    const imageInput = document.getElementById('imageInput');
    if( imageInput.files.length !== 0 ) {
      files = imageInput.files;
    }
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    this.dataServ.addImage(files);
  }
  */
}
