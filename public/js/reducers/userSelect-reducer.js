export default (state = {user: [], addSuccess:""}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.user = action.data;
        state.addSuccess = '';

        return Object.assign({}, state);
    }

    if (action.type === 'ADD_USER_SUCCESS') {

        switch (action.data) {
            case 'success':
                state.addFlag = true;
                break;
            default:
                state.addFlag = false;
        }

        return Object.assign({}, state);
    }


    return state;
}