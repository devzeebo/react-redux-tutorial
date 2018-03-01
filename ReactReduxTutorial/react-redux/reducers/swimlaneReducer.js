import { SWIMLANE_GET_SUCCESS } from '../actions/constants';
import classReducer from './_classReducer';

class SwimlaneReducer {

    [SWIMLANE_GET_SUCCESS](state, action) {

        const swimlane = { ...action.swimlane };
        return {
            ...state,
            [action.swimlane.guid]: swimlane
        };
    }
}

export default classReducer(SwimlaneReducer);
