import * as THREE from 'three-full';
import { Injectable, HostListener } from '@angular/core';

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

  public fieldOfView = 20;
  public nearClippingPane = 1;
  public farClippingPane = 2000;

  public controls: THREE.OrbitControls;

  constructor() {
    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  public createScene(canvas: HTMLCanvasElement): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas;

    // create the scene
    this.scene = new THREE.Scene();

    const loader = new THREE.OBJLoader();
    loader.load('assets/model/test.obj', this.onModelLoadingCompleted);

    this.createLight();
    this.createCamera();
    this.startRendering();
    this.addControls();
  }

  private onModelLoadingCompleted(object) {

    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial();
    const texture = 'assets/texture/large.jpg';

    // material.specular = 1;
    material.map = loader.load(texture);

    /*object.traverse( function ( child ) {
      if ( child instanceof THREE.Mesh ) {
        child.material = material;
      }
    } );*/

    object.position.y = -.445;

    this.scene.add(object);

    const geometry = new THREE.CylinderBufferGeometry(.345, .235, .885, 21, 22, true, 0, 2 * 3.1415926535898);
    // var texture = THREE.TextureLoader('/assets/textures/large.jpg');

    // var material.transparent = true;
    const cylinder = new THREE.Mesh( geometry, material );
    if (material.map) {
      this.scene.add( cylinder );
    }

    this.render();
    console.log('Texture load complete.');
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
