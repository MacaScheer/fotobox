import { combineReducers } from 'redux';
import entitiesReducer from './posts_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
});

export default rootReducer;