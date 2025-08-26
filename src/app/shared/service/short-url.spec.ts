import { TestBed } from '@angular/core/testing';

import { ShortUrl } from './short-url';

describe('ShortUrl', () => {
  let service: ShortUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortUrl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
