import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee';
import { Course } from 'src/app/interfaces/course';
import { EmployeeService } from 'src/app/services/employee.service';
import { CourseService } from 'src/app/services/course.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  createScheduleForm: FormGroup;
  employees: Employee[];
  courses: Course[];
  days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  hours = [16, 17, 18, 19, 20, 21, 22];
  minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  levels = ['Débutant 1', 'Débutant 2', 'Débutant 3', 'Intermediaire 1', 'Intermediaire 2'];
  confirmationMsg: string;

  constructor(
    private scheduleService: ScheduleService,
    private employeeService: EmployeeService,
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.confirmationMsg = '';

    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        console.log('Employees: ', this.employees);
      }
    );

    this.courseService.getCourses().subscribe(
    (data) => {
      this.courses = data;
      console.log('Courses: ', this.courses);
    }
    );

    this.createScheduleForm = this.formBuilder.group({
      course: new FormControl(''),
      level: new FormControl(''),
      instructor: new FormControl(''),
      day: new FormControl(this.days[0]),
      hour: new FormControl(this.hours[0]),
      minute: new FormControl(this.minutes[0]),
    });
  }

  onSubmit() {
    console.log('createScheduleForm: ', this.createScheduleForm.value);

/*     let courseName = this.createScheduleForm.get('course').value;
    let level = this.createScheduleForm.get('level').value;
    let time = this.createScheduleForm.get('hour').value + ':' + this.createScheduleForm.get('minutes').value;
    let dayTime = this.createScheduleForm.get('day').value +', '+time;*/
    this.scheduleService.createSchedule(this.createScheduleForm).subscribe(); 
   // this.confirmationMsg = 'Nouvelle classe: '+courseName+' - '+dayTime;
    this.createScheduleForm.reset();
  }
}
