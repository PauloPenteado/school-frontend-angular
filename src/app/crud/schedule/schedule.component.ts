import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Schedule } from 'src/app/interfaces/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[];
  confirmationMsg: string;

  constructor(
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit() {

    this.scheduleService.getSchedules().subscribe(
      (data) => {
        this.schedules = data;
        console.log('Schedule list: ', this.schedules);
      }
    );

  }

  deleteSchedule(url: string, schedule: Schedule) {
    console.log('Delete URL: ', url);
    console.log('Schedule to be deleted: ', schedule);
    const name = schedule.course.name + ', ' + schedule.hour + 'h' + schedule.minutes;
    this.scheduleService.deleteSchedule(url).subscribe(
      (data) => {
        this.schedules.splice(this.schedules.indexOf(schedule), 1);
        this.confirmationMsg = 'Schedule deleted: '.concat(name);
      }
    );
  }

}
