import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const ADD = '[User] Add';
export const SELECT = '[User] Select';
export const DELETE = '[User] Delete';
export const SEARCH = '[User] Search';
export const SEARCH_RESULT = '[User] Search Result';
export const LOAD = '[User] Load';

export class UserAddAction implements Action {
  readonly type = ADD;
  constructor(public payload: User) { }
}

export class UserSelectAction implements Action {
  readonly type = SELECT;
  constructor(public payload: number) { }
}

export class UserDeleteAction implements Action {
  readonly type = DELETE;
  constructor(public payload: number) { }
}

export class UserSearchAction implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) { }
}

export class UserSearchResultAction implements Action {
  readonly type = SEARCH_RESULT;
  constructor(public payload: number[]) { }
}

export class UserLoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: User[]) { }
}

export type Actions = UserAddAction
  | UserSelectAction
  | UserDeleteAction
  | UserSearchAction
  | UserSearchResultAction
  | UserLoadAction;
