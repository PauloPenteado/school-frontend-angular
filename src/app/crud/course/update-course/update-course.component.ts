import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  courseId: any;
  updateCourseForm: FormGroup;
  course: Course;
  confirmationMsg: string;

  constructor(
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private courseService: CourseService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });

    this.courseService.getCourse(this.courseId).subscribe(
      (data) => {
        this.course = data;
        console.log('Course: ', this.course);

        this.updateCourseForm = this.formBuilder.group({
          name: new FormControl(this.course.name),
          description: new FormControl(this.course.description),
        });
      },
      (error) => {
        console.error('Error: ',error);
      }
    );
  }

  onSubmit(){
    this.courseService.updateCourse(this.course.id, this.updateCourseForm).subscribe(
      (data) => {
        this.confirmationMsg = 'Course updated: '.concat(this.updateCourseForm.get('name').value);
      }
    );
  }
}
