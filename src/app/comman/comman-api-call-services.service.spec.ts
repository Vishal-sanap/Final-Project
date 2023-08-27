import { TestBed } from '@angular/core/testing';

import { CommanApiCallServicesService } from './comman-api-call-services.service';

describe('CommanApiCallServicesService', () => {
  let service: CommanApiCallServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommanApiCallServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
