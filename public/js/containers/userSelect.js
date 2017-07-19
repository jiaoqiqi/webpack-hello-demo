import {connect} from "react-redux"

import SelectUser from "../components/userSelect";

const mapStateToProps = (state)=> {
    return {
        user:state.userSelect.user,
        addSuccess: state.userSelect.addSuccess,
        updateSuccess : state.userSelect.updateSuccess
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        OnDisplayUsers : () => {
            dispatch({type:"SELECT_USER"})
        },

        OnAddUser : (data) => {
            dispatch({type:"ADD_USER", data})
        },

        OnUpdateUser : (data) => {
            dispatch({type:"UPDATE_USER",data})
        }

    }

};

export default connect(mapStateToProps,mapDispatchToProps)(SelectUser);