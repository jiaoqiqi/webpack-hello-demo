import request from "superagent";

export default store => next => action => {
    if (action.type === 'SELECT_USER') {
        request.get('/userSelect')
            .end((err, res) => {
                next({type: "SHOW_USERS", data: res.body});
            });
    }

    else
        next(action);
};