import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {DialogComponent} from './dialog/dialog.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [UsersComponent, DialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
