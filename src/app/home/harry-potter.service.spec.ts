import { TestBed } from '@angular/core/testing';

import { HarryPotterService } from './harry-potter.service';

describe('HarryPotterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarryPotterService = TestBed.get(HarryPotterService);
    expect(service).toBeTruthy();
  });
});
