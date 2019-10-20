import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http' 
import { environment } from 'src/environments/environment';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentUrl = environment.REST_API_URL + 'students';

  constructor(
    private http: HttpClient
    ) { }

    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('A client-side error occurred: ', error.error.message);
      } else {
        console.error(`A server-side error occurred. Error code [${error.status}] Error message [${error.error.message}]`);
      
      return throwError (
        'Something bad happened; please try again later.');
      };
    }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentUrl).pipe(
      map((result:any)=>{
         return result._embedded.students; 
      }),
      retry(3),
      catchError(this.handleError)
      );
  }

  getStudent(id: string) : Observable<Student>{
    let url = this.studentUrl +'/'+id;
    console.log('GET URL: ', url);
    return this.http.get<Student>(url).pipe(
      catchError(this.handleError)

    );
  }

  deleteStudent(url: string): Observable<Student>{
    console.warn('Delete URL: ', url);
    return this.http.delete<Student>(url).pipe(
      catchError(this.handleError)
    );
  }

  createStudent(formGroup: FormGroup): Observable<Student>{
    return this.http.post<Student>(this.studentUrl, formGroup.value).pipe(
      catchError(this.handleError)
    );
  }

  updateStudent(id: number, formGroup: FormGroup): Observable<Student>{
    let url = this.studentUrl +'/'+id;
    return this.http.put<Student>(url, formGroup.value).pipe(
      catchError(this.handleError)
    );
  }

}
