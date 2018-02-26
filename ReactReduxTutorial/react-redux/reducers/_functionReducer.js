const functionReducer = functionMap =>
    (state = {}, action) => (functionMap[action.type] && functionMap[action.type](state, action)) || state;

export default functionReducer;
