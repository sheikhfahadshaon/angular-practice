import { TestBed } from '@angular/core/testing';

import { TrainningPeriodServices } from './trainning-period-services';

describe('TrainningPeriodServices', () => {
  let service: TrainningPeriodServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainningPeriodServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
