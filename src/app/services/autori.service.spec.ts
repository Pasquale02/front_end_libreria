import { TestBed } from '@angular/core/testing';

import { AutoriService } from './autori.service';

describe('AutoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoriService = TestBed.get(AutoriService);
    expect(service).toBeTruthy();
  });
});
