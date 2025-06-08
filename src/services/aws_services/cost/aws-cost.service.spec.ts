import { TestBed } from '@angular/core/testing';

import { AwsCostService } from './aws-cost.service';

describe('AwsCostService', () => {
  let service: AwsCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
