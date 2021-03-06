import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatChipInputEvent, MatDialogRef} from '@angular/material';
import {User} from '../../models/user.model';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../../root-store/users/user.selectors';
import * as todoActions from '../../root-store/todos/todo.actions';
import {Todo} from '../../models/todo.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Label} from '../../models/label.model';
import { v4 as uuid } from 'uuid';
import {AppState} from '../../root-store';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.scss']
})
export class TodoInfoComponent implements OnInit {
  selectedStatus = '';
  users: Array<User> = [];
  selectedUser: User;
  title: string;
  description: string;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  labels: Array<Label> = [];

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(fromUser.selectAllUsers)).subscribe(users => {
      this.users = users;
      this.selectedUser = this.users.find(value => value.id === this.data.todo.assigneeId);
    });
    this.title = this.data.todo.title;
    this.description = this.data.todo.description;
    this.selectedStatus = this.data.todo.status;
    this.labels = !!this.data.todo.labels ? this.data.todo.labels.slice(0) : [];
  }

  save(): void {
    const updatedTodo: Todo = {
      id: !!this.data.todo.id ? this.data.todo.id : uuid(),
      title: this.title,
      description: this.description,
      assigneeId: !!this.selectedUser ? this.selectedUser.id : '',
      status: this.selectedStatus,
      labels: this.labels
    };
    this.store.dispatch(todoActions.upsertTodo({todo: updatedTodo}));
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addLabel(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our label
    if ((value || '').trim()) {
      this.labels.push({title: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLabel(label: Label): void {
    const index = this.labels.indexOf(label);

    if (index >= 0) {
      this.labels.splice(index, 1);
    }
  }
}
