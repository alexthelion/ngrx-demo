import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Todo} from '../../models/todo.model';
import * as TodoActions from './todo.actions';

export interface TodoState extends EntityState<Todo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = adapter.getInitialState({
  // additional entity state properties
  ids: [1, 2],
  entities: {
    1: {id: 1, title: 'Create login screen', description: 'Use jwt for login screen', assigneeId: '', status: 'backlog'},
    2: {id: 2, title: 'Create help screen', description: 'Implement generic help screen, which could open from any other screen', assigneeId: '', status: 'open'},
  }
});

const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo,
    (state, action) => adapter.addOne(action.todo, state)
  ),
  on(TodoActions.upsertTodo,
    (state, action) => adapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.addTodos,
    (state, action) => adapter.addMany(action.todos, state)
  ),
  on(TodoActions.upsertTodos,
    (state, action) => adapter.upsertMany(action.todos, state)
  ),
  on(TodoActions.updateTodo,
    (state, action) => adapter.updateOne(action.todo, state)
  ),
  on(TodoActions.updateTodos,
    (state, action) => adapter.updateMany(action.todos, state)
  ),
  on(TodoActions.deleteTodo,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodos,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TodoActions.loadTodos,
    (state, action) => adapter.addAll(action.todos, state)
  ),
  on(TodoActions.clearTodos,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
