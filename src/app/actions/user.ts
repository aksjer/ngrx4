import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const ADD = '[User] Add';
export const ADD_SUCCESS = '[User] Add Success';
export const ADD_MANY = '[User] Add Many';
export const ADD_MANY_SUCCESS = '[User] Add Many Success';
export const SELECT = '[User] Select';
export const DELETE = '[User] Delete';
export const SEARCH = '[User] Search';
export const SEARCH_RESULT = '[User] Search Result';
export const LOAD = '[User] Load';

export class UserAddAction implements Action {
  readonly type = ADD;
  constructor(public payload: User) { }
}

export class UserAddSuccessAction implements Action {
  readonly type = ADD_SUCCESS;
  constructor(public payload: User) { }
}

export class UserAddManyAction implements Action {
  readonly type = ADD_MANY;
  constructor(public payload: User[]) { }
}

export class UserAddManySuccessAction implements Action {
  readonly type = ADD_MANY_SUCCESS;
  constructor(public payload: User[]) { }
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
  | UserAddSuccessAction
  | UserAddManyAction
  | UserAddManySuccessAction
  | UserSelectAction
  | UserDeleteAction
  | UserSearchAction
  | UserSearchResultAction
  | UserLoadAction;
