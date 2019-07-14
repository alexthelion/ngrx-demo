import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../users/store/user.reducer';
import * as fromTodo from '../todos/store/todo.reducer';

export interface State {
  users: fromUser.State;
  todos: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
  todos: fromTodo.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
