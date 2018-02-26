import { THROW_ERROR } from '../actions/constants';

export default function (state = {}, action) {
    if (action.type === THROW_ERROR) {
        console.log(action);
    }
    return state;
}
