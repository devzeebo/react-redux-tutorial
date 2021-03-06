import axios from 'axios';
import { throwError } from './errorActions';
import { SWIMLANE_GET_SUCCESS } from './constants';
import config from '../config';

export const getSwimlaneSuccess = swimlane => ({
    type: SWIMLANE_GET_SUCCESS,
    swimlane
});

export const getSwimlane = guid =>
    dispatch => axios.get(`${config.apiHost}/api/swimlanes/${guid}`).then(
        res => dispatch(getSwimlaneSuccess(res.data)),
        err => dispatch(throwError(err))
    );

export default {
    getSwimlaneSuccess
};
