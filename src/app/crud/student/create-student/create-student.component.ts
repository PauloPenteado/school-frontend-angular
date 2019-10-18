import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  createStudentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createStudentForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSubmit(){
    console.warn('Form Data: ',this.createStudentForm.value);
    this.studentService.createStudent(this.createStudentForm).subscribe();
    this.createStudentForm.reset();
  }
}
