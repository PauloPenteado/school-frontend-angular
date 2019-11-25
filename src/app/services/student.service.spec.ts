import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { StudentService } from './student.service';

describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: StudentService = TestBed.get(StudentService);
    expect(service).toBeTruthy();
  });
});
