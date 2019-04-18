import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';

@Component({
  selector: 'gc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  name: string;
  constructor(public dataServ: DataService) {}
  ngOnInit() {
  }
}
