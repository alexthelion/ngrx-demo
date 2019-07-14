import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as userActions from '../user.actions';
import * as todoActions from '../../todo/todo.actions';
import {User} from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    // const user: User = {id: '1', name: 'Alex'};
    // this.store.dispatch(todoActions.addTodo({todo: {id: '1', description: 'Test', assignee: user}}));
  }

}
