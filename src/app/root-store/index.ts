import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './users/user.reducer';
import * as fromTodo from './todos/todo.reducer';

export interface AppState {
  users: fromUser.UserState;
  todos: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUser.reducer,
  todos: fromTodo.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
