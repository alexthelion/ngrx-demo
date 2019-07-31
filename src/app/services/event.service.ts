import { Injectable } from '@angular/core';
import {colors} from '../calendar/color';
import {CalendarEvent} from 'angular-calendar';
import {addHours, addMinutes, startOfDay} from 'date-fns';

export class Label {
  constructor(public desc: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: CalendarEvent[] = [
    {
      id: 1,
      title: 'An event',
      start: addHours(startOfDay(new Date()), 5),
      end: addMinutes(addHours(startOfDay(new Date()), 7), 12),
      meta: {
        labels: [],
        isSelected: false
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      id: 2,
      title: 'Another event',
      start: addHours(startOfDay(new Date()), 2),
      meta: {
        labels: [],
        isSelected: false
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      id: 3,
      title: 'An 3rd event',
      start: addHours(startOfDay(new Date()), 2),
      meta: {
        labels: [new Label('bug')],
        isSelected: false
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  constructor() { }

  getEvents(): CalendarEvent[] {
    return this.events;
  }

  addEvent(calendarEvent: CalendarEvent): CalendarEvent {
    return undefined;
  }

  deleteEvent(event: CalendarEvent): void {
    const index = this.events.indexOf(event);
    this.events.splice(index, 1);
  }
}
