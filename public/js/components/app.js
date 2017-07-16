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