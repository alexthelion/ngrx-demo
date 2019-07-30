import { Injectable } from '@angular/core';
import {colors} from '../calendar/color';
import {CalendarEvent} from 'angular-calendar';
import {addHours, addMinutes, startOfDay} from 'date-fns';

export const users = [
  {
    id: 0,
    name: 'John smith',
    color: colors.yellow
  },
  {
    id: 1,
    name: 'Jane Doe',
    color: colors.blue
  }
];

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
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 5),
      end: addMinutes(addHours(startOfDay(new Date()), 7), 12),
      meta: {
        user: users[0],
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
      color: users[1].color,
      start: addHours(startOfDay(new Date()), 2),
      meta: {
        user: users[1],
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
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 2),
      meta: {
        user: users[0],
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
}
