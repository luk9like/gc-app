import { ThreeService } from '../service/three.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'gc-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  private canEleId = 'canvas';

   constructor(private tServ: ThreeService) { }

   @ViewChild('canvas')
   private canvasRef: ElementRef;

   private get canvas(): HTMLCanvasElement {
     return this.canvasRef.nativeElement;
   }

   ngOnInit() {
     this.tServ.createScene(this.canvas);
   }

}
