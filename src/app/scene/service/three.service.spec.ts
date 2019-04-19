import { TestBed } from '@angular/core/testing';

import { ThreeService } from './three.service';
import {of} from 'rxjs/internal/observable/of';
import {getValue} from '@angular/core/src/render3/styling/class_and_style_bindings';
import {DataService} from '../../shared/service/data.service';

describe('ThreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreeService = TestBed.get(ThreeService);
    expect(service).toBeTruthy();
  });

  // Add test for createScene method
  describe('currentModel', () => {
    it('should return the current Model', () => {
      const service: DataService = TestBed.get(DataService);
      expect(service.model).toEqual('small');
    });
  });
});
