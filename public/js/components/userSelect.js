<<<<<<< HEAD
import React,{Component} from 'react';

export default class SelectUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            id:null,
            name:null,
            sex:null,
            age:null,
            tel:null,
            mail:null,
            note:null
        }
    }

    componentWillMount(){
        this.props.OnDisplayUsers();
    }

    initState(user){
        this.setState({
            id:user.id,
            name:user.name,
            sex:user.sex,
            age:user.age,
            tel:user.tel,
            mail:user.mail,
            note:user.note
        })

    }

    render(){
        const userList = this.props.user.map((user) => {
            return <div key={user.id}>
                <table>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.sex}</td>
                        <td>{user.age}</td>
                        <td>{user.tel}</td>
                        <td>{user.mail}</td>
                        <td>{user.note}</td>
                        <td>
                            <span onClick={this.initState.bind(this,user)} />
                        </td>
                    </tr>
                </table>

            </div>;
        });

        return <div>
            <table>
                <tr>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>年龄</td>
                    <td>电话</td>
                    <td>邮箱</td>
                    <td>备注</td>
                </tr>
            </table>

            <div>{userList}</div>
        </div>
    }

}
=======
/**
 * Created by monster on 17-7-16.
 */
>>>>>>> 628ecd21eb1a1f320d42211fca92ef21c271bddb
