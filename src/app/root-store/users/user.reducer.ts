import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../../models/user.model';
import * as UserActions from './user.actions';
import * as RootActions from '../root-store.actions';

export interface UserState extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  // additional entity state properties
  ids: [1, 2, 3],
  entities: {
    1: {id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid'},
    2: {id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco'},
    3: {id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main'}
  }
});

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state, action) => adapter.addOne(action.user, state)
  ),
  on(UserActions.upsertUser,
    (state, action) => adapter.upsertOne(action.user, state)
  ),
  on(UserActions.addUsers,
    (state, action) => adapter.addMany(action.users, state)
  ),
  on(UserActions.upsertUsers,
    (state, action) => adapter.upsertMany(action.users, state)
  ),
  on(UserActions.updateUser,
    (state, action) => adapter.updateOne(action.user, state)
  ),
  on(UserActions.updateUsers,
    (state, action) => adapter.updateMany(action.users, state)
  ),
  on(UserActions.deleteUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UserActions.deleteUsers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(UserActions.loadUsers,
    (state, action) => adapter.addAll(action.users, state)
  ),
  on(UserActions.clearUsers,
    state => adapter.removeAll(state)
  ),
  on(RootActions.rehydrate, state => {
    console.log('init action in users');
    return state;
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
