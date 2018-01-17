import { Action } from '@ngrx/store';

export const OPEN = '[Sidenav] Open';
export const CLOSE = '[Sidenav] Close';

export class SidenavOpenAction implements Action {
  readonly type = OPEN;
}

export class SidenavCloseAction implements Action {
  readonly type = CLOSE;
}

export type Actions = SidenavOpenAction
  | SidenavCloseAction;
