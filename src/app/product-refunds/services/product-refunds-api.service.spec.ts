import { TestBed } from '@angular/core/testing';

import { ProductRefundsApiService } from './product-refunds-api.service';

describe('ProductRefundsApiService', () => {
  let service: ProductRefundsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRefundsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
