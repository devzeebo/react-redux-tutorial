import { combineReducers } from 'redux';
import errorReducer from './reducers/errorReducer';
import sprintReducer from './reducers/sprintReducer';
import swimlaneReducer from './reducers/swimlaneReducer';

const reducer = combineReducers({
    errors: errorReducer,
    sprints: sprintReducer,
    swimlanes: swimlaneReducer,
});

export default reducer;
