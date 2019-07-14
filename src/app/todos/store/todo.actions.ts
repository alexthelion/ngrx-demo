import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from './todo.model';

export const loadTodos = createAction(
  '[Todo/API] Load Todos', 
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo/API] Add Todo',
  props<{ todo: Todo }>()
);

export const upsertTodo = createAction(
  '[Todo/API] Upsert Todo',
  props<{ todo: Todo }>()
);

export const addTodos = createAction(
  '[Todo/API] Add Todos',
  props<{ todos: Todo[] }>()
);

export const upsertTodos = createAction(
  '[Todo/API] Upsert Todos',
  props<{ todos: Todo[] }>()
);

export const updateTodo = createAction(
  '[Todo/API] Update Todo',
  props<{ todo: Update<Todo> }>()
);

export const updateTodos = createAction(
  '[Todo/API] Update Todos',
  props<{ todos: Update<Todo>[] }>()
);

export const deleteTodo = createAction(
  '[Todo/API] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodos = createAction(
  '[Todo/API] Delete Todos',
  props<{ ids: string[] }>()
);

export const clearTodos = createAction(
  '[Todo/API] Clear Todos'
);
