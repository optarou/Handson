import { TestBed, inject } from '@angular/core/testing';

import { GuardsTopService } from './guards-top.service';

describe('GuardsTopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsTopService]
    });
  });

  it('should ...', inject([GuardsTopService], (service: GuardsTopService) => {
    expect(service).toBeTruthy();
  }));
});
