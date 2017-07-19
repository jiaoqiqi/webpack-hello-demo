import request from "superagent";

export default store => next => action => {
    if (action.type === 'ADD_USER') {
        request.get('/userAdd')
            .end((err, res) => {
                next({type: "ADD_USERS_SUCCESS", data: res.body});
            });
    }
    else
        next(action);
};