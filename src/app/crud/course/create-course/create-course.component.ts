import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  createCourseForm: FormGroup;
  confirmationMsg: String;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.createCourseForm = this.formBuilder.group({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onSubmit(){
    console.warn('Form Data: ',this.createCourseForm.value);
    this.courseService.createCourse(this.createCourseForm).subscribe();
    this.confirmationMsg = 'New course added: '.concat(this.createCourseForm.get('name').value);
    this.createCourseForm.reset();
  }

}
