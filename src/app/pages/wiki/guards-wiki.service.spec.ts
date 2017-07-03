import { TestBed, inject } from '@angular/core/testing';

import { GuardsWikiService } from './guards-wiki.service';

describe('GuardsWikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsWikiService]
    });
  });

  it('should ...', inject([GuardsWikiService], (service: GuardsWikiService) => {
    expect(service).toBeTruthy();
  }));
});
