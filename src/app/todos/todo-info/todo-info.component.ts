import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../users/store/user.model';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../../users/store/user.selectors';
import * as todoActions from '../store/todo.actions';
import {Todo} from '../store/todo.model';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoInfoComponent implements OnInit {
  selectedStatus = '';
  users: Array<User> = [];
  selectedUser: User;
  title: string;
  description: string;

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(fromUser.selectAllUsers)).subscribe(users => {
      this.users = users;
      this.selectedUser = this.users.find(value => value.id === this.data.todo.assigneeId);
    });
    this.title = this.data.todo.title;
    this.description = this.data.todo.description;
    this.selectedStatus = this.data.todo.status;
  }

  save(): void {
    const updatedTodo: Todo = {
      id: this.data.todo.id,
      title: this.title,
      description: this.description,
      assigneeId: !!this.selectedUser ? this.selectedUser.id : '',
      status: this.selectedStatus
    };
    this.store.dispatch(todoActions.upsertTodo({todo: updatedTodo}));
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
