import { ThreeService } from '../service/three.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'gc-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  private canEleId = 'canvas';

   constructor(public three: ThreeService) { }

   @ViewChild('canvas')
   private canvasRef: ElementRef;

   private get canvas(): HTMLCanvasElement {
     return this.canvasRef.nativeElement;
   }

   public zoomObject(direction) {
    this.three.changeCameraPosition(direction);
   }

   ngOnInit() {
     this.three.createScene(this.canvas);
   }

}
