import request from "superagent";

export default store => next => action => {
    if (action.type === 'UPDATE_USER') {
        request.post('/userUpdate')
            .send(action.data)
            .end((err, res) => {
                next({type: "UPDATE_USERS_SUCCESS", data: res.body});
            });
    }
    else
        next(action);
};