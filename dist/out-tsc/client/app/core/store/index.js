import * as createLogger from 'redux-logger';
import { rootReducer, deimmutify, reimmutify } from './store';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import persistState from 'redux-localstorage';
import { compose } from 'redux';
export { rootReducer, reimmutify, };
var storage = compose()(adapter(window.localStorage));
export var middleware = [];
export var enhancers = [
    persistState(storage, "redux-localstorage", function () { })
];
middleware.push(createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify,
}));
//# sourceMappingURL=../../../../../../client/app/core/store/index.js.map