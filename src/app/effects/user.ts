import { Injectable, InjectionToken } from '@angular/core';
import { Actions, Effect, } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { map, tap, switchMap } from 'rxjs/operators';
import * as fromUser from '../actions/user';
import { User } from '../models/user';

@Injectable()
export class UserEffects {

  users: User[] = [
    { id: 1, name: 'bob', age: 15 },
    { id: 2, name: 'marco', age: 24 },
    { id: 3, name: 'jack', age: 36 }
  ];

  constructor(
    private actions: Actions
  ) { }

  @Effect()
  search$: Observable<Action> = this.actions
    .ofType(fromUser.SEARCH)
    .pipe(
    map((a: any) => { // switchMap if service
      const result = a.payload ? this.users.filter(e => e.name.includes(a.payload)).map(e => e.id) : [];
      return new fromUser.UserSearchResultAction(result);
    })
    );

  @Effect()
  add$: Observable<Action> = this.actions
    .ofType(fromUser.ADD)
    .pipe(
    map((a: fromUser.UserAddAction) => a.payload),
    switchMap((u: User) => Observable.of(u).delay(100)),
    map((u: User) => new fromUser.UserAddSuccessAction(u))
    );

  @Effect()
  adds: Observable<Action> = this.actions
    .ofType(fromUser.ADD_MANY)
    .pipe(
    map((a: fromUser.UserAddManyAction) => a.payload),
    map((u: User[]) => new fromUser.UserAddManySuccessAction(u))
    );


}
