import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo.model';
import * as fromTodos from '../root-store/todos/todo.selectors';
import {MatDialog} from '@angular/material';
import {TodoInfoComponent} from './todo-info/todo-info.component';
import {AppState} from '../root-store';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todosBacklog$: Observable<Array<Todo>>;
  todosOpen$: Observable<Array<Todo>>;
  todosInProgress$: Observable<Array<Todo>>;
  todosDone$: Observable<Array<Todo>>;

  constructor(private store: Store<AppState>,
              public dialog: MatDialog) { }

  ngOnInit() {
  this.todosBacklog$ = this.store.pipe(select(fromTodos.selectAllBacklogTodos));
  this.todosOpen$ = this.store.pipe(select(fromTodos.selectAllOpenTodos));
  this.todosInProgress$ = this.store.pipe(select(fromTodos.selectAllInProgressTodos));
  this.todosDone$ = this.store.pipe(select(fromTodos.selectAllDoneTodos));
}

  openTodoCreationDialog(): void {
    const dialogRef = this.dialog.open(TodoInfoComponent, {
      width: '800px',
      data: {isNew: true, todo: {title: '', description: ''}}
    });
  }

}
