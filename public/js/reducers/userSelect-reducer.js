export default (state = {user: [], addSuccess:""}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.user = action.data;
        state.addSuccess = '';

        return Object.assign({}, state);
    }

    if (action.type === 'ADD_USER_SUCCESS') {

        switch (action.data) {
            case 'success':
                state.addSuccess = true;
                break;
            default:
                state.addSuccess = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'UPDATE_USER_SUCCESS') {

        switch (action.data) {
            case 'success':
                state.updateSuccess = true;
                break;
            default:
                state.updateSuccess = false;
        }

        return Object.assign({}, state);
    }

    return state;
}