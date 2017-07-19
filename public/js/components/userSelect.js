import React, {Component} from 'react';
import nextProps from "../reducers/userSelect-reducer";

export default class SelectUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: null,
            sex: null,
            age: null,
            tel: null,
            mail: null,
            note: null
        }
    }

    componentWillMount() {
        this.props.OnDisplayUsers();
    }

    addUser() {
        let name = this.refs.addName.value.trim();
        let sex = this.refs.addSex.value.trim();
        let age = this.refs.addAge.value.trim();
        let tel = this.refs.addTel.value.trim();
        let mail = this.refs.addMail.value.trim();
        let note = this.refs.addNote.value.trim();

        if (!name || !sex || !age || !tel || !mail || !note) {
            alert("the info of user can not be empty");
        }

        this.props.OnAddUser({name, sex, age, tel, mail, note});
    }

    OnUpdateUser(){
        this.props.OnUpdateUser({
            id:this.state.id,
            name:this.state.name,
            sex:this.state.sex,
            age:this.state.age,
            tel:this.state.tel,
            mail:this.state.mail,
            note:this.state.note,
        });
    }

    componentWillReceiveProps() {
        if (nextProps.addSuccess === true) {
            alert("add success");
            this.props.OnDisplayUsers;
        } else if (nextProps.addSuccess === false) {
            alert("add failed");
            this.props.OnDisplayUsers;
        }

        if (nextProps.updateSuccess === true) {
            alert("update success");
            this.props.OnDisplayUsers;
        } else if (nextProps.updateSuccess === false) {
            alert("update failed");
            this.props.OnDisplayUsers;
        }
    }

    onChangeName() {
        this.setState({
            name: this.refs.updateName.value
        });
    }

    onChangeSex() {
        this.setState({
            sex: this.refs.updateSex.value
        });
    }

    onChangeAge() {
        this.setState({
            name: this.refs.updateAge.value
        });
    }

    onChangeTel() {
        this.setState({
            name: this.refs.updateTel.value
        });
    }

    onChangeMail() {
        this.setState({
            name: this.refs.updateMail.value
        });
    }

    onChangeNote() {
        this.setState({
            name: this.refs.updateNote.value
        });
    }


    initState(user) {
        this.setState({
            id: user.id,
            name: user.name,
            sex: user.sex,
            age: user.age,
            tel: user.tel,
            mail: user.mail,
            note: user.note
        })

    }

    render() {
        const usersList = this.props.user.map((user, i) => {
            return <div key={i}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td >{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.age}</td>
                        <td >{user.sex}</td>
                        <td >{user.tel}</td>
                        <td >{user.email}</td>
                        <td >{user.note}</td>


                        <td className="col seat-col">
                            <span onClick={this.initState.bind(this, user)}/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div>
            <table>
                <tbody>
                <tr>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>年龄</td>
                    <td>电话</td>
                    <td>邮箱</td>
                    <td>备注</td>
                </tr>
                </tbody>
            </table>


            <div>{usersList}</div>

            <div>
                <div>
                    <div>姓名: <input type="text" ref="addName"/></div>
                    <div>性别: <input type="text" ref="addSex"/></div>
                    <div>年龄: <input type="text" ref="addAge"/></div>
                    <div>电话: <input type="text" ref="addTel"/></div>
                    <div>邮箱: <input type="text" ref="addMail"/></div>
                    <div>备注: <input type="text" ref="addNote"/></div>
                </div>
            </div>

            <div>
                <button type="button" className="btn btn-primary"
                        onClick={this.addUser.bind(this)}>添加
                </button>
            </div>

            <div>
                <div>
                    <div>姓名: <input type="text" value={this.state.name} ref="updateName"
                                    onChange={this.onChangeName.bind(this)}/></div>
                    <div>性别: <input type="text" value={this.state.sex} ref="updateSex"
                                    onChange={this.onChangeSex.bind(this)}/></div>
                    <div>年龄: <input type="text" value={this.state.age} ref="updateAge"
                                    onChange={this.onChangeAge.bind(this)}/></div>
                    <div>电话: <input type="text" value={this.state.tel} ref="updateTel"
                                    onChange={this.onChangeTel.bind(this)}/></div>
                    <div>邮箱: <input type="text" value={this.state.mail} ref="updateMail"
                                    onChange={this.onChangeMail.bind(this)}/></div>
                    <div>备注: <input type="text" value={this.state.note} ref="updateNote"
                                    onChange={this.onChangeNote.bind(this)}/></div>
                </div>

                <div>
                    <button onClick={this.OnUpdateUser.bind(this)}>确认修改</button>
                </div>

            </div>

        </div>
    }
}
