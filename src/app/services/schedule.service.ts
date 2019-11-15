import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Schedule } from '../interfaces/schedule';
import { map, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  scheduleUrl = environment.REST_API_URL + 'schedules';
  projectionUrlSuffix = 'projection=scheduleDTO';

  constructor(
    private http: HttpClient
  ) { }

  getSchedules(): Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.scheduleUrl+'?'+this.projectionUrlSuffix).pipe(
      map((result: any) => {
        return result._embedded.schedules;
      }),
      retry(3)
    );
  }

  deleteSchedule(url: string): Observable<Schedule> {
    return this.http.delete<Schedule>(url).pipe();
  }

  createSchedule(formGroup: FormGroup): Observable<Schedule> {
    return this.http.post<Schedule>(this.scheduleUrl, formGroup.value).pipe();
  }
}
