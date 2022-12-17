import { TestBed } from '@angular/core/testing';

import { ProductssService } from './productss.service';

describe('ProductssService', () => {
  let service: ProductssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
