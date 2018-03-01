import classReducer from './_classReducer';
import { SPRINT_GET_SUCCESS } from '../actions/constants';

class SprintReducer {

    [SPRINT_GET_SUCCESS](state, action) {
        const sprint = { ...action.sprint };
        sprint.swimlanes = (sprint.swimlanes || []).map(it => it.guid);

        return {
            ...state,
            [action.sprint.guid]: sprint
        };
    }
}
export default classReducer(SprintReducer);
