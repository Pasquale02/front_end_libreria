import { TestBed } from '@angular/core/testing';

import { LibriService } from './libri.service';

describe('LibriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibriService = TestBed.get(LibriService);
    expect(service).toBeTruthy();
  });
});
