import { ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from './layout';
import * as fromUser from './user';
import { User } from '../models/user';
import { Dictionary } from '@ngrx/entity/src/models';

export interface State {
  layout: fromLayout.State;
  user: fromUser.State;
}

export const reducers = {
  layout: fromLayout.reducer,
  user: fromUser.reducer
};

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getSidenavState = createSelector(getLayoutState, fromLayout.getSidenavState);

export const getUserState = createFeatureSelector<fromUser.State>('user');
export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers
} = fromUser.adapter.getSelectors(getUserState);
export const getSelectedUserId = createSelector(getUserState, fromUser.getSelectedUserId);
export const getSearchIds = createSelector(getUserState, fromUser.getSearchIds);
export const getSearchResult = createSelector(getUserEntities, getSearchIds,
  (users: Dictionary<User>, searchIds: number[]) =>
    searchIds.map((id: number) => users[id]));


// ------------------------------------------

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
