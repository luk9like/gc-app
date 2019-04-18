import { Injectable } from '@angular/core';
import {ThreeService} from '../../scene/service/three.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private three: ThreeService) {}

  selectedImage;
  designName: string;
  designSize: string;
  count: number = 100;
  size: Number = 0.2;
  state: boolean = false;
  stroke: boolean = false;
  price: number = 99.99;
  model = 'small';

  public loadDesign() {
    this.three.reloadTexture(this.selectedImage);
    this.state = false;
  }

  public setModel(model) {
    // check if uploaded
    if (this.selectedImage !== undefined) {
      console.log('Texture will be deleted... ' + this.selectedImage);
    }
    this.selectedImage = undefined;
    this.designName = undefined;
    this.designSize = undefined;

    this.model = model;
    this.setSize(model);
    this.three.setCupSize(model);

    if (model !== undefined) {
      this.state = true;
    }
    this.three.reloadModel(model);
  }

  public setSize(model) {
    switch (model) {
      case 'medium': {
        this.size = .3;
        break;
      }
      case 'normal': {
        this.size = .4;
        break;
      }
      case 'large': {
        this.size = .5;
        break;
      }
      default: {
        this.size = .2;
        break;
      }
    }
  }
}
