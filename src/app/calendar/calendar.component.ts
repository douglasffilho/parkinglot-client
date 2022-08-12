import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: []
})
export class CalendarComponent {
  @Input() date: Date;
  @Output() dateChange: EventEmitter<Date>;

  constructor() {
    this.date = new Date();
    this.dateChange = new EventEmitter<Date>();
  }
}
