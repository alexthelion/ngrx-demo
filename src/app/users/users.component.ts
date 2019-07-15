import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as userActions from './store/user.actions';
import * as todoActions from '../todos/store/todo.actions';
import * as fromUser from '../users/store/user.selectors';
import {User} from './store/user.model';
import {Observable} from 'rxjs';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  editField: string;
  userList$: Observable<Array<User>>;
  @ViewChild('removeDialog', {static: false}) removeDialogComponent: DialogComponent;

  constructor(private store: Store<any>, private modalService: MDBModalService) {
  }

  ngOnInit() {
    this.userList$ = this.store.pipe(select(fromUser.selectAllUsers));
  }

  updateList(id: string, property: string, event: any) {
    const editField = event.target.textContent;
    // this.personList[id][property] = editField;
  }

  add() {
    alert('It\'s not developed yet :)'); // todo: add logic
  }

  changeValue(id: string, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  remove(user: User) {
    this.removeDialogComponent.title = 'User Removal';
    this.removeDialogComponent.content = 'Are you sure you want to remove the user: ' + user.name + ' ?';
    this.removeDialogComponent.isDeleteType = true;
    this.removeDialogComponent.open();
    this.removeDialogComponent.approve$.subscribe(() => {
      this.store.dispatch(userActions.deleteUser({id: user.id}));
    });
  }

}
