import classReducer from './_classReducer';
import { THROW_ERROR } from '../actions/constants';

class ErrorReducer {
    [THROW_ERROR](state = {}, action) {
        console.log(action);
        return state;
    }
}

export default classReducer(ErrorReducer);
