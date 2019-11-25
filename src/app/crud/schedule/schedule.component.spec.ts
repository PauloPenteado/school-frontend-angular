import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateScheduleComponent } from '../schedule/create-schedule/create-schedule.component';
import { ScheduleComponent } from './schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleService } from 'src/app/services/schedule.service';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleComponent,
        CreateScheduleComponent,
        ScheduleService
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
