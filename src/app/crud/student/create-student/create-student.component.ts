import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { CourseService } from 'src/app/course.service';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  createStudentForm: FormGroup;
  confirmationMsg: string;
  courses: Course[];

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.confirmationMsg = '';
   
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        console.log('Courses: ', data)
      },
      (error) => {
        console.error('Error: ',error);
      }
    );

    this.createStudentForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSubmit(){
    let name;
    console.warn('Form Data: ',this.createStudentForm.value);
    this.studentService.createStudent(this.createStudentForm).subscribe();
    name = this.createStudentForm.get('firstName').value + ' '+this.createStudentForm.get('lastName').value;
    this.confirmationMsg = 'New student addded: '.concat(name);
    this.createStudentForm.reset();
  }
}
