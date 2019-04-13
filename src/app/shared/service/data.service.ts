import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedImage: any;
  count: number = 100;
  size: Number = 0.2;
  stroke: boolean = false;
  price: number = 99.99;
  model: String = 'small';

  test = "Lukas";
  startTime = Date.now();
  constructor() { }

  public addImage(file): void {
    this.selectedImage = file;
    console.log(this.selectedImage);
  }

}
