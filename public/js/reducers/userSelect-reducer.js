export default (state = {user: [], addSuccess:""}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.user = action.data;
        state.addSuccess = '';

        return Object.assign({}, state);
    }

    return state;
}