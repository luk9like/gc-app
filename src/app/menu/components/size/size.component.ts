import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';
import {ThreeService} from '../../../scene/service/three.service';

@Component({
  selector: 'gc-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  name: string;

  constructor(public three: ThreeService, private dataServ: DataService) {
    console.log(dataServ);
    this.name = dataServ.test;
  }

  changeIt() {
    this.dataServ.test = 'Max';
  }

  ngOnInit() {
  }

}
