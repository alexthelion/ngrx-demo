import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule, MatSelectModule} from '@angular/material';
import {TodosComponent} from './todos.component';
import {TodoCardComponent} from './todo-card/todo-card.component';
import {TodoInfoComponent} from './todo-info/todo-info.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    TodosComponent,
    TodoCardComponent,
    TodoInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [TodosComponent]
})
export class TodosModule {
}
