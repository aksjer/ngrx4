import * as fromSidenav from '../actions/sidenav';

export interface State {
  sidenavOpen: boolean;
}

const initialState: State = {
  sidenavOpen: false
};

export const reducer = (state: State = initialState, action: fromSidenav.Actions): State => {
  switch (action.type) {
    case fromSidenav.OPEN:
      return { ...state, sidenavOpen: true };
    case fromSidenav.CLOSE:
      return { ...state, sidenavOpen: false };
    default:
      return state;
  }
};

export const getSidenavState = (state: State): boolean => state.sidenavOpen;
