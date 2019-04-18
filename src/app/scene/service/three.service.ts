import * as THREE from 'three';
import {OBJLoader} from 'three-full';
import {OrbitControls} from 'three-full';
import { Injectable, HostListener } from '@angular/core';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  private canvas: HTMLCanvasElement;

  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private lighting: boolean;
  private ambient;

  private fieldOfView = 20;
  private nearClippingPane = 1;
  private farClippingPane = 2000;

  public controls: OrbitControls;

  private prevModel: string;
  private cupSize: string;

  private radiusTop = {'small': .345, 'medium': .39, 'normal': .44, 'large': .435};
  private radiusBottom = {'small': .235, 'medium': .285, 'normal': .31, 'large': .3};
  private cylinderHeight = {'small': .885, 'medium': .885, 'normal': 1.05, 'large': 1.33};
  private radialSegments = 25;
  private heightSegments = 25;
  private thetaLength: number = 2 * Math.PI;

  constructor() {
    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  public createScene(canvas: HTMLCanvasElement): void {
    // get the reference of the canvas element from HTML Template
    this.canvas = canvas;

    // create the scene
    this.scene = new THREE.Scene();

    // set cupSize
    this.cupSize = 'small';

    const loader = new OBJLoader( THREE.DefaultLoadingManager );
    loader.load('assets/model/' + this.cupSize + '.obj', this.onModelLoadingCompleted);

    this.createLight();
    this.createCamera();
    this.startRendering();
    this.addControls();
  }

  private onModelLoadingCompleted(object) {

    object.position.y = -.445;
    object.name = 'currentModel';

    this.scene.add(object);
    this.prevModel = object;
    this.render();
  }

  private createCamera() {
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );

    // Set position and look at
    this.camera.position.y = 2.2;
    this.camera.position.x = 0.15;
    this.camera.position.z = 6.1;
  }

  private createLight() {
    this.lighting = true;
    this.ambient = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(this.ambient);
    this.ambient.intensity = 0.5;

    const keyLight = new THREE.DirectionalLight(new THREE.Color(0xf3f3f3), 0.4);
    keyLight.position.set(0, 100, 0);
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 0.2);
    fillLight.position.set(100, 0, 100);
    this.scene.add(fillLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-100, 0, -100).normalize();
    this.scene.add(backLight);
  }

  private getAspectRatio(): number {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRendering() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setClearColor(0xffffff, 1);
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public addControls() {
  this.controls = new OrbitControls(this.camera, this.canvas);
  this.controls.enableDamping = true;
  this.controls.dampingFactor = 0.7;
  this.controls.enableZoom = true;
  this.controls.autoRotate = false;
  this.controls.autoRotateSpeed = 0.3;
  this.controls.rotateSpeed = 1.0;
  this.controls.zoomSpeed = 1.2;
  this.controls.addEventListener('change', this.render);
}

  public reloadModel(model) {
    const prevModel1 = this.scene.getObjectByName('180ml_ColdCup_Circle.003_CUSTOM');
    const prevModel2 = this.scene.getObjectByName('180ml_ColdCup_Circle.003_paper');
    const currentModel = this.scene.getObjectByName('currentModel');
    const currentTexture = this.scene.getObjectByName('currentTexture');
    this.scene.remove(prevModel1, prevModel2, currentModel, currentTexture);

    const file = 'assets/model/' + model + '.obj';
    const loader = new OBJLoader();
    loader.load(file, this.onModelLoadingCompleted);
}

    public reloadTexture(image) {
      this.checkAspectRatio(image);
      this.removeTexture();

      const loader = new THREE.TextureLoader();
      loader.load(image, (texture) => {
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true
        });
        const geometry = this.createCylinder();
        const cylinder = new THREE.Mesh(geometry, material);
        cylinder.name = 'currentTexture';
        this.fixCylinderPosition(material, cylinder);

        this.scene.add(cylinder);
        this.render();
      },
      undefined,
      function (err) {
        console.log( 'an error happened!');
      }
      );
    }

    public checkAspectRatio(image) {
      var img = new Image();
      img.src = image;
      img.onload = function () {
        var width = img.naturalWidth,
          height = img.naturalHeight;
        window.URL.revokeObjectURL( img.src );
        if ( width !== 1183 || height !== 580) {
          alert('Warnung! Das hochgeladene Design ist nicht in der richtigen Auflösung!');
        }
      };
    }

    public removeTexture() {
      const currentTexture = this.scene.getObjectByName('currentTexture');
      if (currentTexture !== undefined) {
        this.scene.remove(currentTexture);
      }
    }

    public createCylinder(): THREE.CylinderBufferGeometry {
      return new THREE.CylinderBufferGeometry(
        this.radiusTop[this.cupSize],
        this.radiusBottom[this.cupSize],
        this.cylinderHeight[this.cupSize],
        this.radialSegments,
        this.heightSegments,
        true,
        0,
        this.thetaLength);
    }

    public fixCylinderPosition(material, cylinder) {
      cylinder.rotation.y += 3;
      if (material.map !== undefined) {
       if (this.cupSize === 'normal') {
          cylinder.position.y = .09;
       }
       if (this.cupSize === 'large') {
          cylinder.position.y = .22;
       }
       } else {
       console.log( 'Texture can not be mapped!' );
       }
    }

    public setCupSize(cupSize) {
    this.cupSize = cupSize;
    }

    public changeCameraPosition(direction) {
      const currentModel = this.scene.getObjectByName('currentModel');
      const cylinder = this.scene.getObjectByName('currentTexture');
      if (direction === 'left') {
        cylinder.rotation.y -= 5 / (Math.PI);
      } else {
        cylinder.rotation.y += 5 / (Math.PI);
      }
      this.render();
    }

  /* EVENTS */

  public onMouseDown(event: MouseEvent) {
    console.log('onMouseDown');
    event.preventDefault();

    // Example of mesh selection/pick:
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, this.camera);

    const obj: THREE.Object3D[] = [];
    this.findAllObjects(obj, this.scene);
    const intersects = raycaster.intersectObjects(obj);
    console.log('Scene has ' + obj.length + ' objects');
    console.log('Camera position ' + this.camera.position.x + ', ' + this.camera.position.y + ', ' + this.camera.position.z);
    console.log(intersects.length + ' intersected objects found');
    intersects.forEach((i) => {
      console.log(i.object); // do what you want to do with object
    });

  }

  private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
    // NOTE: Better to keep separate array of selected objects
    if (parent.children.length > 0) {
      parent.children.forEach((i) => {
        pred.push(i);
        this.findAllObjects(pred, i);
      });
    }
  }

  public onMouseUp(event: MouseEvent) {
    console.log('onMouseUp');
  }


  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);

    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }

  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    console.log('onKeyPress: ' + event.key);
  }

}
