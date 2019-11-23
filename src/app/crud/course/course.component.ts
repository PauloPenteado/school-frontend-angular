import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  confirmationMsg: string;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      (data) => this.courses = data,
      (error) => console.error('Error: ',error)
      )
  }

  deleteCourse(url: string, course: Course){
    const courseName = course.name;
    this.courseService.deleteCourse(url).subscribe(
      (data) => {
        this.courses.splice(this.courses.indexOf(course), 1);
        this.confirmationMsg = 'Deleted course: '.concat(courseName);
      }
    );
  }
}
