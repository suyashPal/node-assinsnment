import { TestBed, inject } from '@angular/core/testing';

import { OnlineshopService } from './onlineshop.service';

describe('OnlineshopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlineshopService]
    });
  });

  it('should be created', inject([OnlineshopService], (service: OnlineshopService) => {
    expect(service).toBeTruthy();
  }));
});
