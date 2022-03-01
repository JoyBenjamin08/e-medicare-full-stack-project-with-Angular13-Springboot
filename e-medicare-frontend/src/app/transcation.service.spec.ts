import { TestBed } from '@angular/core/testing';

import { TranscationService } from './transcation.service';

describe('TranscationService', () => {
  let service: TranscationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
