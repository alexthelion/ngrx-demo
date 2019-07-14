import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../user/user.reducer';
import * as fromTodo from '../todo/todo.reducer';

export interface State {
  users: fromUser.State;
  todos: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
  todos: fromTodo.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
