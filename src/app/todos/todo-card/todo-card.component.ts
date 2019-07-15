import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../store/todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  getColorByStatus(): string {
    switch (this.todo.status.toLocaleLowerCase()) {
      case 'backlog':
        return 'bg-white';
      case 'open':
        return 'bg-info';
      case 'inprogress':
        return 'bg-warning';
      case 'done':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  }

  getTextColorByStatus(): string {
    if (this.todo.status.toLocaleLowerCase() === 'backlog') {
      return 'text-dark';
    }

    return 'text-white';
  }

}
