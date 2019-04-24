import { ThreeService } from '../service/three.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

/**
 * Scene Component
 */
@Component({
  selector: 'gc-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  /**
   * Constructor for the Three Service
   * @param three   Instance of the ThreeService
   */
   constructor(public three: ThreeService) { }

  /**
   * The canvas element of the template
   *
   * returns the Reference of the Element
   */
   @ViewChild('canvas')
   private canvasRef: ElementRef;

  /**
   * Getter-Method for the canvas
   * @return this.canvasRef.nativeElement   The canvas element of the DOM
   */
   private get canvas(): HTMLCanvasElement {
     return this.canvasRef.nativeElement;
   }

  /**
   * For Rotation the model
   * Fires the changeCameraPosition-Method in ThreeService
   */
   public zoomObject(direction) {
    this.three.changeCameraPosition(direction);
   }

  /**
   * Fires the CreateScene-Method on init
   */
   ngOnInit() {
     this.three.createScene(this.canvas);
   }

}
