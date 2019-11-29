import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee';
import { Course } from 'src/app/interfaces/course';
import { EmployeeService } from 'src/app/services/employee.service';
import { CourseService } from 'src/app/services/course.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Weekday } from 'src/app/interfaces/weekday';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  createScheduleForm: FormGroup;
  employees: Employee[];
  courses: Course[];
  weekdays: Weekday[];
  hours = [16, 17, 18, 19, 20, 21, 22];
  minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  levels = ['Débutant 1', 'Débutant 2', 'Débutant 3', 'Intermediaire 1', 'Intermediaire 2'];
  confirmationMsg: string;

  constructor(
    private scheduleService: ScheduleService,
    private employeeService: EmployeeService,
    private courseService: CourseService,
    private utilsService: UtilsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.confirmationMsg = '';

    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      }
    );

    this.courseService.getCourses().subscribe(
    (data) => {
      this.courses = data;
    }
    );

    this.utilsService.getWeekdays().subscribe(
      (data) => {
        this.weekdays = data;
        console.log('Days of week: ', this.weekdays);
      }
    );

    this.createScheduleForm = this.formBuilder.group({
      course: new FormControl(''),
      level: new FormControl(''),
      instructor: new FormControl(''),
      day: new FormControl(''),
      hour: new FormControl(this.hours[0]),
      minutes: new FormControl(this.minutes[0]),
    });
  }

  onSubmit() {
    console.log('createScheduleForm: ', this.createScheduleForm.value);
    this.scheduleService.createSchedule(this.createScheduleForm).subscribe(
      (data) => {
        this.confirmationMsg = 'New schedule added! ';
        this.createScheduleForm.reset();
      }
    );
  }
}
