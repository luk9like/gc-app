import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../shared/service/data.service';

@Component({
  selector: 'gc-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public dataServ: DataService) { }

  ngOnInit() {
  }

}
