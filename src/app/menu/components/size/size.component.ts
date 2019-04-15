import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';
import {ThreeService} from '../../../scene/service/three.service';

@Component({
  selector: 'gc-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  sizes: Array<string> = ['small', 'medium', 'normal', 'large'];

  constructor(public three: ThreeService, private dataServ: DataService) {
    console.log(dataServ);
  }

  ngOnInit() {
  }

}
