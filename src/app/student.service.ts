import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment';
import { Student } from './student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentUrl = environment.REST_API_URL + 'students';

  constructor(
    private http: HttpClient
    ) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentUrl).pipe(
      map((result:any)=>{
         return result._embedded.students; 
      }));
  }

  
}
