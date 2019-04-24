import { Injectable } from '@angular/core';
import {ThreeService} from '../../scene/service/three.service';

/**
 * DataService
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Constructor
   *
   * @param three  Implements the ThreeService for update the 3D View
   */
  constructor(private three: ThreeService) {}

  /**
   * selectedImage of User
   */
  selectedImage;
  /**
   * Design Name of uploaded Image
   */
  designName: string;
  /**
   * Size of uploaded Image
   */
  designSize: number;
  /**
   * @ignore
   */
  count: number = 100;
  /**
   * The size of the selected cup
   */
  size: number = 0.2;
  /**
   * Is true if selectedImages is set,
   * but not uploaded
   */
  state: boolean = false;
  /**
   * @ignore
   */
  stroke: boolean = false;
  /**
   * @ignore
   */
  price: number = 99.99;
  /**
   * The selected 3D Model
   */
  model = 'small';

  /**
   * loads a Design, if the user click the
   * upload button
   */
  public loadDesign() {
    this.three.reloadTexture(this.selectedImage);
    this.state = false;
  }

  /**
   * reset the current File
   * update the model and cupSize
   */
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

  /**
   * Update the Size if model is changing
   */
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
