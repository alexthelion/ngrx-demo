import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../todo.model';
import * as fromTodos from '../root-store/todos/todo.selectors';

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

  constructor(private store: Store<any>) { }

  ngOnInit() {
  this.todosBacklog$ = this.store.pipe(select(fromTodos.selectAllBacklogTodos));
  this.todosOpen$ = this.store.pipe(select(fromTodos.selectAllOpenTodos));
  this.todosInProgress$ = this.store.pipe(select(fromTodos.selectAllInProgressTodos));
  this.todosDone$ = this.store.pipe(select(fromTodos.selectAllDoneTodos));
}

}
