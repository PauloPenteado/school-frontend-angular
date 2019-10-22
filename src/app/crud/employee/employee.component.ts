import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { CourseService } from 'src/app/course.service';
import { Course } from 'src/app/course';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data
      }
    );
  }

  deleteEmployee(url: string, employee: Employee){
    this.employeeService.deleteEmployee(url).subscribe();
    this.employees.splice(this.employees.indexOf(employee), 1);
  }
}
