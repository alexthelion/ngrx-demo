import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as userActions from '../root-store/users/user.actions';
import * as fromUser from '../root-store/users/user.selectors';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  editField: string;
  userList$: Observable<Array<User>>;

  constructor(private store: Store<any>,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userList$ = this.store.pipe(select(fromUser.selectAllUsers));
  }

  updateList(id: string, property: string, event: any) {
    const editField = event.target.textContent;
    // this.personList[id][property] = editField;
  }

  add() {
    alert('It\'s not available yet :)'); // todo: add logic
  }

  changeValue(id: string, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  openRemoveDialog(user: User): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: {title: 'User Removal', content: 'Are you sure you want to remove the user: ' + user.name + ' ?'},
      panelClass: 'dialog-padding'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!!result) {
        this.store.dispatch(userActions.deleteUser({id: user.id}));
      }
    });
  }

}
