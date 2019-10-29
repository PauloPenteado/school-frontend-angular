import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Course } from 'src/app/course';
import { EmployeeService } from 'src/app/employee.service';
import { CourseService } from 'src/app/course.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ScheduleService } from 'src/app/schedule.service';
import { Schedule } from 'src/app/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[];


  constructor(
    private employeeService: EmployeeService,
    private courseService: CourseService,
    private scheduleService: ScheduleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.scheduleService.getSchedules().subscribe(
      (data) => {
        this.schedules = data;
        console.log('Schedules: ', this.schedules);
      }
    );

  }

}
