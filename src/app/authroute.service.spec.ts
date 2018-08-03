import { TestBed, inject } from '@angular/core/testing';

import { AuthrouteService } from './authroute.service';

describe('AuthrouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthrouteService]
    });
  });

  it('should be created', inject([AuthrouteService], (service: AuthrouteService) => {
    expect(service).toBeTruthy();
  }));
});
