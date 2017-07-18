import {connect} from "react-redux"

import SelectUser from "../components/userSelect";

const mapStateToProps = (state)=> {
    return {
        user:state.userSelect.user,
        addSuccess: state.userSelect.addSuccess
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        OnDisplayUsers : () => {
            dispatch({type:"SELECT_USER"})
        },

        OnAddUser : () => {
            dispatch({type:"ADD_USER"})
        }

    }

};

export default connect(mapStateToProps,mapDispatchToProps)(SelectUser);