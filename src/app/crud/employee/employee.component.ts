import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  confirmationMsg: string;

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
    const name = employee.firstName + ' '+ employee.lastName;
    this.employeeService.deleteEmployee(url).subscribe(
      (data) => {
        this.employees.splice(this.employees.indexOf(employee), 1);
        this.confirmationMsg = 'Deleted team member: '.concat(name);
      }
    );
  }
}
