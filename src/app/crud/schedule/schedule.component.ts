import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/schedule.service';
import { Schedule } from 'src/app/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[];


  constructor(
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit() {

    this.scheduleService.getSchedules().subscribe(
      (data) => {
        this.schedules = data;
      }
    );

  }

}
