import { TestBed } from '@angular/core/testing';

import { MustMatchService } from './must-match.service';

describe('MustMatchService', () => {
  let service: typeof MustMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MustMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
