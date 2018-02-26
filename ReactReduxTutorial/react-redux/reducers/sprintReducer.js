import functionReducer from './_functionReducer';

const getSprintSuccess = (state, action) => {
    const sprint = { ...action.sprint };
    sprint.swimlanes = (sprint.swimlanes || []).map(it => it.guid);

    return {
        ...state,
        [action.sprint.guid]: sprint
    };
};

const sprintReducer = functionReducer({
    getSprintSuccess
});

export default sprintReducer;
