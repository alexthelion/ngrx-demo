import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {addHours, addMinutes, startOfDay} from 'date-fns';
import {colors} from './color';
import {DayViewEvent} from 'calendar-utils';
import {Subject} from 'rxjs';

export class Label {
  constructor(public desc: string) {}
}

const users = [
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


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @Input()
  dayEvent: DayViewEvent;

  @Input()
  tooltipPlacement: any;

  @Input()
  tooltipAppendToBody: boolean;

  @Input()
  customTemplate: TemplateRef<any>;

  @Input()
  eventTitleTemplate: TemplateRef<any>;

  @Input()
  eventActionsTemplate: TemplateRef<any>;

  @Input()
  tooltipTemplate: TemplateRef<any>;

  @Output()
  eventClicked: EventEmitter<any> = new EventEmitter();

  labels: Array<any> = [{desc: 'Major'}, {desc: 'PR'}, {desc: 'Minor'}];

  viewDate: Date = new Date();
  events: CalendarEvent[] = [
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

  refresh: Subject<any> = new Subject();

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.events = [...this.events];
  }

  isSelected(dayEvent: any) {
    return dayEvent.event.meta.isSelected;
  }

  select(dayEvent: any) {
    this.events.filter(value => value.id !== dayEvent.event.id).forEach(value => value.meta.isSelected = false);
    dayEvent.event.meta.isSelected = !dayEvent.event.meta.isSelected;
  }

  isAnyEventSelected(): boolean {
    return !this.events.some(value => value.meta.isSelected);
  }
/*  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }*/
}
