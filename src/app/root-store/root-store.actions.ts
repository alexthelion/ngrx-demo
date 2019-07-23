import {createAction, props} from '@ngrx/store';

export const rehydrate = createAction(
  'Rehydrate from indexdb',
  props<{ data: any }>()
);
