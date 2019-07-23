import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {rehydrate} from './root-store.actions';
import {defer, of} from 'rxjs';

@Injectable()
export class AppEffects {

  @Effect()
  init$ = defer(() => of(rehydrate(undefined)));

  constructor(private actions$: Actions) {}

}
