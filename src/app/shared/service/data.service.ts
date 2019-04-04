import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedImage: any;
  constructor() { }

  public addImage(file): void {
    this.selectedImage = file;
    console.log(this.selectedImage);
  }

}
