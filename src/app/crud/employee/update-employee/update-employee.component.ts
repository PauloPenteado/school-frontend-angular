import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployeeForm: FormGroup;
  employee: Employee;
  employeeId: any;
  confirmationMsg: string;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get('employeeId');
      console.warn('route param employeeId: ', this.employeeId);
    });

    this.employeeService.getEmployee(this.employeeId).subscribe(
      (data) => {
        this.employee = data;

        this.updateEmployeeForm = this.formBuilder.group({
          firstName: new FormControl(this.employee.firstName),
          lastName: new FormControl(this.employee.lastName),
          phone: new FormControl(this.employee.phone),
          email: new FormControl(this.employee.email),
        });
      }
    );
  }

  onSubmit(){
    let name;
    this.employeeService.updateEmployee(this.employee.id, this.updateEmployeeForm).subscribe();
    name = this.updateEmployeeForm.get('firstName').value + ' '+this.updateEmployeeForm.get('lastName').value;
    this.confirmationMsg = 'Team member updated: '.concat(name);
  }

}
