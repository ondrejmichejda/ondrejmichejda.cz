import { TestBed } from '@angular/core/testing';

import { HttpService } from 'src/services/http.service';

describe('Http', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
