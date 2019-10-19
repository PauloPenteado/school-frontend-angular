import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];

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
    this.courseService.deleteCourse(url).subscribe();
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
