import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../users/store/user.model';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../../users/store/user.selectors';

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

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(fromUser.selectAllUsers)).subscribe(users => {
      this.users = users;
      this.selectedUser = this.users.find(value => value.id === this.data.todo.assigneeId);
    });

    this.selectedStatus = this.data.todo.status;
  }
}
