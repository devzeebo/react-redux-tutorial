import functionReducer from './_functionReducer';

const getSwimlaneSuccess = (state, action) => {

    const swimlane = { ...action.swimlane };

    return {
        ...state,
        [action.swimlane.guid]: swimlane
    };
};

const swimlaneReducer = functionReducer({
    getSwimlaneSuccess
});

export default swimlaneReducer;
