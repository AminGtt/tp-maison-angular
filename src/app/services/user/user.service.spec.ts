import { TestBed } from '@angular/core/testing';

import { USerService } from './user.service';

describe('USerService', () => {
  let service: USerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(USerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
