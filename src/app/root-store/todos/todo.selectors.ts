import * as fromTodo from './todo.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TodoState} from './todo.reducer';
import {BACKLOG, DONE, IN_PROGRESS, OPEN} from '../../todo.model';

export const selectTodosState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  fromTodo.selectAll
);

export const selectAllBacklogTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.status.toLocaleLowerCase() === BACKLOG)
);

export const selectAllOpenTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.status.toLocaleLowerCase() === OPEN)
);

export const selectAllInProgressTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.status.toLocaleLowerCase() === IN_PROGRESS)
);

export const selectAllDoneTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.status.toLocaleLowerCase() === DONE)
);
