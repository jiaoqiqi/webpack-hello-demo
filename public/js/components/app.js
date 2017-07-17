<<<<<<< HEAD
import React, {Component} from 'react';


class App extends Component {
    render() {
        return <div>
            <div>
                <h1 >用户管理系统</h1>
                {this.props.children}
            </div>
        </div>
    }
}

export default App;
=======
import React from "react";
import {browserHistory} from "react-router";

export default class App extends React.Component{
    render(){
        return <div>
            <h1>用户管理系统</h1>
            {this.props.children}
        </div>
    }
}
>>>>>>> 628ecd21eb1a1f320d42211fca92ef21c271bddb
