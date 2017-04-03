import { makeTypedFactory } from 'typed-immutable-record';
export var UserFactory = makeTypedFactory({
    firstName: null,
    lastName: null
  });
export var INITIAL_USER_STATE = UserFactory();
export var SessionFactory = makeTypedFactory({
    token: null,
    user: INITIAL_USER_STATE,
    hasError: false,
    isLoading: false
});
export var INITIAL_STATE = SessionFactory();
//# sourceMappingURL=../../../../../../../client/app/core/store/session/session.initial-state.js.map
