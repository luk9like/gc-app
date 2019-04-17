import * as THREE from 'three-full';
import { Injectable, HostListener } from '@angular/core';
import {DataService} from '../../shared/service/data.service';

@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  private canvas: HTMLCanvasElement;

  private renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private lighting: boolean;
  private ambient;

  public fieldOfView = 20;
  public nearClippingPane = 1;
  public farClippingPane = 2000;

  public controls: THREE.OrbitControls;

  public prevModel: String = '';

  public radiusTop = {'small': .345, 'medium': .39, 'normal': .44, 'large': .435};
  public radiusBottom = {'small': .235, 'medium': .285, 'normal': .31, 'large': .3};
  public cylinderHeight = {'small': .885, 'medium': .885, 'normal': 1.05, 'large': 1.33};
  public radialSegments = 21;
  public heightSegments = 22;
  public thetaLength: Number = 2 * Math.PI;

  constructor(public dataServ: DataService) {
    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  public createScene(canvas: HTMLCanvasElement): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas;

    // create the scene
    this.scene = new THREE.Scene();

    const loader = new THREE.OBJLoader( THREE.DefaultLoadingManager );
    loader.load('assets/model/' + this.dataServ.model + '.obj', this.onModelLoadingCompleted);

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
    this.camera.position.y = 1.5;
    this.camera.position.x = 0.1;
    this.camera.position.z = 4.2;
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
  this.controls = new THREE.OrbitControls(this.camera);
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
    this.dataServ.model = model;
    switch(model) {
      case 'medium': {
        this.dataServ.size = 0.2;
        break;
      }
      case 'normal': {
        this.dataServ.size = 0.3;
        break;
      }
      case 'large': {
        this.dataServ.size = 0.4;
        break;
      }
      default: {
        this.dataServ.size = .18;
        break;
      }
    }

    // check if uploaded
    if ( this.dataServ.selectedImage !== ''){
      console.log('Texture deleted: ' + this.scene.getObjectByName('currentModel'));
    }

    const prevModel1 = this.scene.getObjectByName('180ml_ColdCup_Circle.003_CUSTOM');
    const prevModel2 = this.scene.getObjectByName('180ml_ColdCup_Circle.003_paper');
    const currentModel = this.scene.getObjectByName('currentModel');
    const currentTexture = this.scene.getObjectByName('currentTexture');

    this.scene.remove(prevModel1, prevModel2, currentModel, currentTexture);
    this.dataServ.selectedImage = undefined;
    this.dataServ.designName = undefined;
    this.dataServ.designSize = undefined;
    this.dataServ.state = false;

    const file = 'assets/model/' + model + '.obj';
    const loader = new THREE.OBJLoader();
    loader.load(file, this.onModelLoadingCompleted);
}

    public reloadTexture(image) {
      var img = new Image();
      img.src = image;
      img.onload = function () {
        var width = img.naturalWidth,
            height = img.naturalHeight;
        window.URL.revokeObjectURL( img.src );
        if ( width !== 400 || height !== 300) {
          alert('Warnung! Das hochgeladene Design ist nicht in der richtigen Auflösung!');
        }
      };
      const currentTexture = this.scene.getObjectByName('currentTexture');
      this.scene.remove(currentTexture);

      const loader = new THREE.TextureLoader();
      if ( image === undefined ) { console.log( 'Texture is not valid!' ); }
      loader.load(this.dataServ.selectedImage, (texture) => {
        const material = new THREE.MeshBasicMaterial({
          map: texture,
        });

        const cupSize = '' + this.dataServ.model;

        const geometry = new THREE.CylinderBufferGeometry(
            this.radiusTop[cupSize],
            this.radiusBottom[cupSize],
            this.cylinderHeight[cupSize],
            this.radialSegments,
            this.heightSegments,
            true,
            0,
            this.thetaLength);

        // var material.transparent = true;
        const cylinder = new THREE.Mesh(geometry, material);
        cylinder.name = 'currentTexture';
        /*if (material.map) {
          if (this.dataServ.model === 'normal') {
            cylinder.position.y = .09;
          }
          if (this.dataServ.model === 'large') {
            cylinder.position.y = .22;
          }

        } else {
          console.log( 'Texture can not be mapped!' );
        }*/

        console.log('Das nicht angezeigte Design ist: ' + image);
        this.scene.add(cylinder);
        this.render();
        console.log('Texture load complete.');
        this.dataServ.state = false;

      },
      undefined,
      function (err) {
        console.log( 'an error happened!');
      }
      );
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
