import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Course } from '../interfaces/course';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = environment.REST_API_URL + 'courses';


  constructor(
    private http: HttpClient
  ) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side error occurred: ', error.error.message);
    } else {
      console.error(`A server-side error occurred. Error code [${error.status}] Error message [${error.error.message}]`);
    
    return throwError (
      'Something bad happened; please try again later');
    };
  }

    getCourses(): Observable<Course[]>{
      return this.http.get<Course[]>(this.courseUrl).pipe(
        map((result:any)=>{
           return result._embedded.courses; 
        }),
        retry(3)
        );
    }

    getCourse(id: string): Observable<Course>{
      let url = this.courseUrl +'/'+id;
      return this.http.get<Course>(url).pipe(
        catchError(this.handleError)
      );
    }

    createCourse(formGroup: FormGroup): Observable<Course>{
      return this.http.post<Course>(this.courseUrl, formGroup.value).pipe(
        catchError(this.handleError)
      );
    }

    updateCourse(id: number, formGroup: FormGroup): Observable<Course>{
      let url = this.courseUrl + '/' + id;
      return this.http.put<Course>(url, formGroup.value).pipe(
        catchError(this.handleError)
      );
    }

    deleteCourse(url: string): Observable<Course>{
      return this.http.delete<Course>(url).pipe(
        catchError(this.handleError)
      );
    }
}
