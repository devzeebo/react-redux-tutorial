const classReducer = (ClassDef, persist = false) => {
    persist = persist && new ClassDef();
    return (state = {}, action) => (ClassDef.prototype[action.type] && (persist || new ClassDef())[action.type](state, action)) || state;
};
export default classReducer;
