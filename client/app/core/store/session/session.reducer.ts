import { SessionActions, IPayloadAction } from '../../actions/session.actions';
import { ISessionRecord } from './session.types';
import {
  INITIAL_STATE,
  INITIAL_USER_STATE,
  UserFactory,
} from './session.initial-state';
import {actionTypes} from 'redux-localstorage'

export const sessionReducer = (
  state: ISessionRecord = INITIAL_STATE,
  action: IPayloadAction) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case SessionActions.LOGIN_USER:
      return state.merge({
        token: null,
        user: INITIAL_USER_STATE,
        hasError: false,
        isLoading: true
      });

    case SessionActions.LOGIN_USER_SUCCESS:
      console.log('state:', state);
      localStorage.setItem('currentUser', JSON.stringify(UserFactory(action.payload.user)));
      return state.merge({
        token: action.payload.token,
        user: UserFactory(action.payload.user),
        hasError: false,
        isLoading: false,
      });

    case SessionActions.LOGIN_USER_ERROR:
      return state.merge({
        token: null,
        user: INITIAL_USER_STATE,
        hasError: true,
        isLoading: false,
      });

    case SessionActions.LOGOUT_USER:
      console.log("logout user state", action, state);
      console.log(INITIAL_STATE);
      localStorage.removeItem('currentUser');
      return INITIAL_STATE;

    case actionTypes.INIT:
      const persistedState = action.payload;
      console.log('persistedState', persistedState);
      if (persistedState) {
        return state.merge({
          token: persistedState.session.token,
          user: UserFactory(persistedState.session.user),
          hasError: persistedState.session.hasError,
          isLoading: persistedState.session.isLoading,
        });
      }



    default:
      return state;
  }
}
