import { THROW_ERROR } from './constants';

export const throwError = error => ({ type: THROW_ERROR, error });

export default {
    throwError
};
