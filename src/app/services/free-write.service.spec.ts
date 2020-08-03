import { TestBed } from '@angular/core/testing';

import { FreeWriteService } from './free-write.service';

describe('FreeWriteService', () => {
  let service: FreeWriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeWriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
