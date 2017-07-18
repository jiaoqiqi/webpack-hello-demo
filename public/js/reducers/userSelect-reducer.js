export default (state = {users: [], addSuccess:""}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.users = action.data;
        state.addSuccess = '';

        return Object.assign({}, state);
    }

    return state;
}