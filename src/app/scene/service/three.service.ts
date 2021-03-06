import * as THREE from 'three';
import {OBJLoader} from 'three-full';
import {OrbitControls} from 'three-full';
import { Injectable, HostListener } from '@angular/core';

/**
 * ThreeService for Angular
 * [Three.js]{@link https://threejs.org/}
 */
@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  /**
   * Canvas-Element from the template
   */
  private canvas: HTMLCanvasElement;

  /**
   * The WebGL-Renderer
   */
  private renderer: THREE.WebGLRenderer;
  /**
   * The perspective Camera of the Scene
   */
  private camera: THREE.PerspectiveCamera;
  /**
   * The Scene object
   */
  private scene: THREE.Scene;

  /**
   * The scenes lighting
   */
  private lighting: boolean;
  /**
   * Ambient lighting
   */
  private ambient;

  /**
   * FOV for the camera
   */
  private fieldOfView = 20;
  /**
   * NCP for the camera
   */
  private nearClippingPane = 1;
  /**
   * FCP for the camera
   */
  private farClippingPane = 2000;

  /**
   * Controls for the 3D Scene
   */
  public controls: OrbitControls;

  /**
   * the preloaded Model
   */
  private prevModel: string;
  /**
   * The selected cupSize
   */
  private cupSize: string;

  /**
   * Cylinder top radius
   */
  private radiusTop = {'small': .345, 'medium': .39, 'normal': .44, 'large': .435};
  /**
   * Cylinder bottom radius
   */
  private radiusBottom = {'small': .235, 'medium': .285, 'normal': .31, 'large': .3};
  /**
   * Cylinder height
   */
  private cylinderHeight = {'small': .885, 'medium': .885, 'normal': 1.05, 'large': 1.33};
  /**
   * Radial Segments (horizontal)
   */
  private radialSegments = 25;
  /**
   * Height Segments (vertical)
   */
  private heightSegments = 25;
  /**
   * lenght of the Cylinder (360deg)
   */
  private thetaLength: number = 2 * Math.PI;

  /**
   * Constructor for Renderer
   */
  constructor() {
    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  /**
   * @param canvas   The canvas element from the template
   * Create the Scene with Light, Camera and Controls in the canvas element
   */
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

  /**
   * @param object    The model which should be loaded to the scene
   * If the model is loaded, add it to the scene and render
   */
  private onModelLoadingCompleted(object) {

    object.position.y = -.445;
    object.name = 'currentModel';

    this.scene.add(object);
    this.prevModel = object;
    this.render();
  }

  /**
   * Create the camera for the scene
   */
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

  /**
   * Create the Lights for the scene
   *
   * Backlight, AmbientLight, KeyLight, FillLight
   */
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

  /**
   * Get the aspect ratio of the current canvas element
   * @return aspectRatio    The aspect ratio of the canvas
   */
  private getAspectRatio(): number {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Start the Renderer with the scene and camera
   */
  private startRendering() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setClearColor(0xffffff, 1);
  }

  /**
   * Render the Scene
   */
  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Add OrbitControls to the scene and set everything
   */
  public addControls() {
  this.controls = new OrbitControls(this.camera, this.canvas);
  this.controls.enableDamping = true;
  this.controls.dampingFactor = 0.7;
  this.controls.enableZoom = true;
  this.controls.autoRotate = false;
  this.controls.autoRotateSpeed = 0.3;
  this.controls.rotateSpeed = 1.0;
  this.controls.zoomSpeed = 1.2;
  this.controls.maxDistance = 8;
  this.controls.minDistance = 3;
  this.controls.enablePan = false;
  this.controls.minPolarAngle = .55; // radians
  this.controls.maxPolarAngle = Math.PI / 1.25; // radians
  this.controls.addEventListener('change', this.render);
}

  /**
   * Change the model, if the user want another
   * @param model   The choosen model of the user
   */
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

  /**
   * Load or reload the texture the user has uploaded
   * and remove the previous
   * @param image   The uploaded File as BLOB URL
   */
  public reloadTexture(image) {
    this.checkAspectRatio(image);
    this.removeTexture();

    const loader = new THREE.TextureLoader();
    loader.load(image, (texture) => {
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true
      });
      material.map.minFilter = THREE.LinearFilter;
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

  /**
   * Check, if the users image has the right aspect ratio
   * @param image   The uploaded File as BLOB URL
   */
  public checkAspectRatio(image) {
    const img = new Image();
    img.src = image;
    img.onload = function () {
      const width = img.naturalWidth,
        height = img.naturalHeight;
      window.URL.revokeObjectURL( img.src );
      if ( width !== 1183 || height !== 580) {
        alert('Warnung! Das hochgeladene Design ist nicht in der richtigen Auflösung!');
      }
    };
  }

  /**
   * remove the current Texture of the scene
   */
  public removeTexture() {
    const currentTexture = this.scene.getObjectByName('currentTexture');
    if (currentTexture !== undefined) {
      this.scene.remove(currentTexture);
    }
  }

  /**
   * Create a cylinder for the users Design
   */
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

  /**
   * Fix the cylinder size
   * @param material   The current material (Texture)
   * @param cylinder   The current cylinder geometry
   */
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

  /**
   * Setup the size of the current cup
   * @param cupSize   The size of the current cup
   */
  public setCupSize(cupSize) {
  this.cupSize = cupSize;
  }

  /**
   * Rotate the model with the buttons
   * @param direction   The direction for rotate
   */
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
  /**
   * @ignore
   */
  public onMouseDown(event: MouseEvent) {
    /*console.log('onMouseDown');
    event.preventDefault();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, this.camera);

    console.log('ControlDistance: ' + this.controls.distance);


    const obj: THREE.Object3D[] = [];
    this.findAllObjects(obj, this.scene);
    const intersects = raycaster.intersectObjects(obj);
    console.log('Scene has ' + obj.length + ' objects');
    console.log('Camera position ' + this.camera.position.x + ', ' + this.camera.position.y + ', ' + this.camera.position.z);
    console.log(intersects.length + ' intersected objects found');
    intersects.forEach((i) => {
      console.log(i.object); // do what you want to do with object
    });
    */
  }
}
