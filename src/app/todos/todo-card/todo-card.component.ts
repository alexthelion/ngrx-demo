import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../store/todo.model';
import {MatDialog} from '@angular/material';
import {TodoInfoComponent} from '../todo-info/todo-info.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo;

  constructor(public dialog: MatDialog) { }

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

  openInfoDialog(): void {
    const dialogRef = this.dialog.open(TodoInfoComponent, {
      width: '400px',
      data: {todo: this.todo}
    });
  }
}
