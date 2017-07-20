import React, {Component} from 'react';


class App extends Component {
    render() {
        return <div>
            <div>
                <h1 className="title">用户管理系统</h1>
                {this.props.children}
            </div>
        </div>
    }
}

export default App;
