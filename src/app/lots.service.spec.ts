import { TestBed } from '@angular/core/testing';

import { LotsService } from './lots.service';

describe('LotsServiceService', () => {
  let service: LotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
