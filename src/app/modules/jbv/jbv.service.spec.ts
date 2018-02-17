import { TestBed, inject } from '@angular/core/testing';

import { JbvService } from './jbv.service';

describe('JbvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JbvService]
    });
  });

  it('should ...', inject([JbvService], (service: JbvService) => {
    expect(service).toBeTruthy();
  }));
});
