import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = environment.REST_API_URL + 'courses';


  constructor(
    private http: HttpClient
  ) { }

    getCourses(): Observable<Course[]>{
      return this.http.get<Course[]>(this.courseUrl).pipe(
        map((result:any)=>{
           return result._embedded.courses; 
        }),
        retry(3)
        );
    }

}
