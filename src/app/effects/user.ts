import { Injectable, InjectionToken } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
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
  actions$: Observable<Action> = this.actions
    .ofType(fromUser.SEARCH)
    .pipe(
    map((a: any) => {
      // console.log(a);
      const ids = this.users.filter(e => e.name.includes(a.payload)).map(e => e.id);
      // console.log(ids);
      return new fromUser.UserSearchResultAction(a.payload ? ids : []);
    })
    );

}
