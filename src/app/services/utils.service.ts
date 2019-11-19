import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Weekday } from '../interfaces/weekday';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  weekdayUrl = environment.REST_API_URL + 'weekdays';

  constructor(
    private http: HttpClient
  ) { }

  getWeekdays(): Observable<Weekday[]> {
    return this.http.get<Weekday[]>(this.weekdayUrl).pipe(
      map((result: any) => {
        return result._embedded.weekdays;
      }),
      retry(3)
    );
  }

}
