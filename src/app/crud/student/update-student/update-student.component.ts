import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/student';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student;
  studentId;
  updateStudentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('studentId');
    });

    this.studentService.getStudent(this.studentId).subscribe(
      (data) => {
        this.student = data;
        console.log('student: ', data);

        this.updateStudentForm = this.formBuilder.group({
          firstName: new FormControl(this.student.firstName),
          lastName: new FormControl(this.student.lastName),
          phone: new FormControl(this.student.phone),
          email: new FormControl(this.student.email),
        });
      },
      (error) => {
        console.error('Error: ',error);
      }
    );
  }

  onSubmit(){

  }
}
