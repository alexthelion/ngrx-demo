import * as fromUser from './user.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAll
);

export const selectUserById = (userID: string) => createSelector(
  selectUserState,
  userState => userState.entities[userID]
);
