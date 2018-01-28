import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../models/user';
import * as fromUser from '../actions/user';

export interface State extends EntityState<User> {
  selectedUserId: number;
  searchIds: number[];
  searchQuery: string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter({
  selectId: (user: User) => user.id
});

const initialState: State = adapter.getInitialState({
  selectedUserId: undefined,
  searchIds: [],
  searchQuery: undefined
});

export const reducer = (state: State = initialState, action: fromUser.Actions): State => {
  switch (action.type) {
    case fromUser.ADD_SUCCESS:
      return { ...adapter.addOne(action.payload, state) };
    case fromUser.ADD_MANY_SUCCESS:
      return { ...adapter.addMany(action.payload, state) };
    case fromUser.SELECT:
      return { ...state, selectedUserId: action.payload };
    case fromUser.DELETE:
      return { ...adapter.removeOne(action.payload, state) };
    case fromUser.SEARCH:
      return {
        ...state,
        searchQuery: action.payload,
        searchIds: []
      };
    case fromUser.SEARCH_RESULT:
      return { ...state, searchIds: action.payload };
    default:
      return state;
  }
};

export const getSelectedUserId = (state: State): number => state.selectedUserId;
export const getSearchIds = (state: State): number[] => state.searchIds;
