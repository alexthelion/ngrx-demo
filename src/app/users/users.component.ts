import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as userActions from './store/user.actions';
import * as todoActions from '../todos/store/todo.actions';
import * as fromUser from '../users/store/user.selectors';
import {User} from './store/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  editField: string;
  userList$: Observable<Array<User>>;
  userList: Array<User> = [];

  constructor(private store: Store<any>) {
    /*this.userList$.subscribe(users => {
      this.userList = users;
    });*/
  }

  ngOnInit() {
    this.userList$ = this.store.pipe(select(fromUser.selectAllUsers));
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    // this.personList[id][property] = editField;
  }

  remove(id: any) {
    alert('It\'s not developed yet :)'); // todo: add remove logic
  }

  add() {
    alert('It\'s not developed yet :)'); // todo: add logic
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
