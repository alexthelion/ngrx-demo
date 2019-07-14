import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as userActions from './store/user.actions';
import * as todoActions from '../todos/store/todo.actions';
import {User} from './store/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' }
  ];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    // const users: User = {id: '1', name: 'Alex'};
    // this.store.dispatch(todoActions.addTodo({todo: {id: '1', description: 'Test', assignee: users}}));
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.personList.splice(id, 1);
  }

  add() {
    alert('It\'s not developed yet :)');
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
