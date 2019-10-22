import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { CourseService } from 'src/app/course.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup;
  courses: Course[];
  confirmationMsg: string;

  constructor(
    private employeeService: EmployeeService,
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      (data) => this.courses = data
    );

    this.createEmployeeForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSubmit(){
    let name;
    this.employeeService.createEmployee(this.createEmployeeForm).subscribe();
    name = this.createEmployeeForm.get('firstName').value + ' '+this.createEmployeeForm.get('lastName').value;
    this.confirmationMsg = 'New team member added: '.concat(name);
    this.createEmployeeForm.reset();
  }

}
