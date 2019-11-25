import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ScheduleService } from './schedule.service';

describe('ScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ScheduleService = TestBed.get(ScheduleService);
    expect(service).toBeTruthy();
  });
});
