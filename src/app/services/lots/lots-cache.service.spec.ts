import { TestBed } from '@angular/core/testing';

import { LotsCacheService } from './lots-cache.service';

describe('LotsCacheService', () => {
  let service: LotsCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotsCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
