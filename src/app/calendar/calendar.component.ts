import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {DayViewEvent} from 'calendar-utils';
import {Subject} from 'rxjs';
import {EventService} from '../services/event.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @Input() dayEvent: DayViewEvent;
  @Input() tooltipPlacement: any;
  @Input() tooltipAppendToBody: boolean;
  @Input() customTemplate: TemplateRef<any>;
  @Input() defaultTemplate: TemplateRef<any>;
  @Input() eventTitleTemplate: TemplateRef<any>;
  @Input() eventActionsTemplate: TemplateRef<any>;
  @Input() tooltipTemplate: TemplateRef<any>;
  @Input() tooltipDelay: number | null;
  @Output() eventClicked: EventEmitter<any> = new EventEmitter();

  labels: Array<any> = [{desc: 'Major'}, {desc: 'PR'}, {desc: 'Minor'}];
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];

  constructor(private eventService: EventService) {
    this.events = eventService.getEvents();
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.events = [...this.events];
    this.refresh.next();
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
}
