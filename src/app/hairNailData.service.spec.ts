/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HairNailDataService } from './hairNailData.service';

describe('Service: HairNailData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HairNailDataService]
    });
  });

  it('should ...', inject([HairNailDataService], (service: HairNailDataService) => {
    expect(service).toBeTruthy();
  }));
});
