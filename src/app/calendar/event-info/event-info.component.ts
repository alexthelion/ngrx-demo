import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CalendarEvent} from 'angular-calendar';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {

  dayEvent: any;
  title: string;
  selectedDate: any;

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dayEvent = data.event;
    this.title = this.dayEvent.event.title;
  }

  ngOnInit() {
  }

  save(): void {
    this.dayEvent.event.title = this.title;
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
