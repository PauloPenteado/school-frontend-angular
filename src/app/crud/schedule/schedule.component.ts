import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Course } from 'src/app/course';
import { EmployeeService } from 'src/app/employee.service';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  employees: Employee[];
  courses: Course[];
  days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
  hours = [16,17,18,19,20,21,22];
  minutes = [0,5,10,15,20,25,30,35,40,45,50,55]

  constructor(
    private employeeService: EmployeeService,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data
        console.log('Instructors: ', this.employees);
      }
    );

    this.courseService.getCourses().subscribe(
    (data) => {
      this.courses = data
      console.log('Courses: ',this.courses);
    }
    );
  }

}
