import { TestBed } from '@angular/core/testing';

import { VieworderService } from './vieworder.service';

describe('VieworderService', () => {
  let service: VieworderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VieworderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
