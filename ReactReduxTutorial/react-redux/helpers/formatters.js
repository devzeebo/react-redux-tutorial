import moment from 'moment';

export const date = (d, format) => d && moment(d).format(format);

export default {
    date
};
