import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { map, retry, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeUrl = environment.REST_API_URL + 'employees';

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

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl).pipe(
      map((result: any) => {
        return result._embedded.employees;
      }),
      retry(3),
      catchError(this.handleError)
    );
  }

  getEmployee(id: string): Observable<Employee>{
    let url = this.employeeUrl + '/' + id;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError)
    )
  }

  createEmployee(formGroup: FormGroup): Observable<Employee>{
    return this.http.post<Employee>(this.employeeUrl, formGroup.value).pipe(
      catchError(this.handleError)
    )
  }

  updateEmployee(id: number, formGroup: FormGroup): Observable<Employee>{
    let url = this.employeeUrl + '/' + id;
    return this.http.put<Employee>(url, formGroup.value).pipe(
      catchError(this.handleError)
    );
  }

  deleteEmployee(url: string): Observable<Employee>{
    return this.http.delete<Employee>(url).pipe(
      catchError(this.handleError)
    );
  }

}
