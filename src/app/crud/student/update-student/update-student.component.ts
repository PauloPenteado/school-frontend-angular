import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/interfaces/student';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student;
  studentId: any;
  updateStudentForm: FormGroup;
  confirmationMsg: string;

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
    let name;
    this.studentService.updateStudent(this.student.id, this.updateStudentForm).subscribe(
      (data) => {
        name = this.updateStudentForm.get('firstName').value + ' '+this.updateStudentForm.get('lastName').value;
        this.confirmationMsg = 'Student updated: '.concat(name);
      }
    );
  }

}
