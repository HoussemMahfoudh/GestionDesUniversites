import { TestBed } from '@angular/core/testing';

import { UniversiteServiceService } from './universite-service.service';

describe('UniversiteServiceService', () => {
  let service: UniversiteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversiteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
