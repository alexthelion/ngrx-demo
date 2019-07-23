import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo.model';
import {MatDialog} from '@angular/material';
import {TodoInfoComponent} from '../todo-info/todo-info.component';
import * as fromUser from '../../root-store/users/user.selectors';
import {select, Store} from '@ngrx/store';
import {User} from '../../models/user.model';
import {AppState} from '../../root-store';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;
  assignedUser: User;

  constructor(public dialog: MatDialog,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(fromUser.selectUserById(this.todo.assigneeId))).subscribe(user => {
      this.assignedUser = user;
    });
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
      width: '800px',
      data: {isNew: false, todo: this.todo}
    });
  }
}
