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

    _OnUpdateUser(){
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
            // return <div key={i}>
            //     <hr/>
            //     <table >
            //         <tbody>
            //         <tr>
            //             <td className="infoTable">{user.id}</td>
            //             <td className="infoTable">{user.name}</td>
            //             <td className="infoTable">{user.age}</td>
            //             <td className="infoTable">{user.sex}</td>
            //             <td className="infoTable">{user.tel}</td>
            //             <td className="infoTable">{user.email}</td>
            //             <td className="infoTable">{user.note}</td>
            //             <td>
            //                 <button>修改</button>
            //             </td>
            //
            //             <td>
            //                 <span onClick={this.initState.bind(this, user)}/>
            //             </td>
            //
            //         </tr>
            //         </tbody>
            //     </table>
            // </div>
            return  <div key={i}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td className="col">{user.id}</td>
                        <td className="col">{user.name}</td>
                        <td className="col">{user.sex}</td>
                        <td className="col">{user.age}</td>
                        <td className="col">{user.tel}</td>
                        <td className="col">{user.mail}</td>
                        <td className="col">{user.note}</td>



                        <td className="col seat-col">
                            <span className="glyphicon glyphicon-erase" data-toggle="modal"
                                  onClick={this.initState.bind(this, user)} data-target="#myModal1"/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div>
            {/*<table>*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                    {/*<td className="infoTable">姓名</td>*/}
                    {/*<td className="infoTable">性别</td>*/}
                    {/*<td className="infoTable">年龄</td>*/}
                    {/*<td className="infoTable">电话</td>*/}
                    {/*<td className="infoTable">邮箱</td>*/}
                    {/*<td className="infoTable">备注</td>*/}
                    {/*<td className="infoTable">*/}
                        {/*<button onClick={this.addUser.bind(this)}>*/}
                            {/*添加</button>*/}
                    {/*</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
            {/*</table>*/}



            <div className="add-div">
                <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    添加用户
                </button>
            </div>
            <hr/>
            <table>
                <tbody>
                <tr>
                    <th className="col-th">姓名</th>
                    <th className="col-th">性别</th>
                    <th className="col-th">年龄</th>
                    <th className="col-th">电话</th>
                    <th className="col-th">邮箱</th>
                    <th className="col-other">备注</th>
                </tr>
                </tbody>
            </table>

            <div>{usersList}</div>


            {/*<div>*/}
                {/*<div>*/}
                    {/*<div>姓名: <input type="text" ref="addName" className="form-control"/></div>*/}
                    {/*<div>性别: <input type="text" ref="addSex" /></div>*/}
                    {/*<div>年龄: <input type="text" ref="addAge"/></div>*/}
                    {/*<div>电话: <input type="text" ref="addTel"/></div>*/}
                    {/*<div>邮箱: <input type="text" ref="addMail"/></div>*/}
                    {/*<div>备注: <input type="text" ref="addNote"/></div>*/}
                {/*</div>*/}

                {/*<div>*/}
                    {/*<button type="button"*/}
                            {/*onClick={this.addUser.bind(this)}>确定添加*/}
                    {/*</button>*/}
                {/*</div>*/}
            {/*</div>*/}

            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="margin">姓名：<input type="text" className="name" ref="addName"/></div>
                            <div className="margin">性别：<input type="text" className="age" ref="addSex"/></div>
                            <div className="margin">年龄：<input type="text" className="sex" ref="addAge"/></div>
                            <div className="margin">电话：<input type="text" className="telephone" ref="addTel"/>
                            </div>
                            <div className="margin">邮箱：<input type="text" className="email" ref="addMail"/></div>
                            <div className="margin">备注：<input type="text"  className="other"
                                                              ref="addNote"/></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.addUser.bind(this)}>
                                添加
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            {/*<div>*/}
                {/*<div>*/}
                    {/*<div>姓名: <input type="text" value={this.state.name} ref="updateName"*/}
                                    {/*onChange={this.onChangeName.bind(this)}/></div>*/}
                    {/*<div>性别: <input type="text" value={this.state.sex} ref="updateSex"*/}
                                    {/*onChange={this.onChangeSex.bind(this)}/></div>*/}
                    {/*<div>年龄: <input type="text" value={this.state.age} ref="updateAge"*/}
                                    {/*onChange={this.onChangeAge.bind(this)}/></div>*/}
                    {/*<div>电话: <input type="text" value={this.state.tel} ref="updateTel"*/}
                                    {/*onChange={this.onChangeTel.bind(this)}/></div>*/}
                    {/*<div>邮箱: <input type="text" value={this.state.mail} ref="updateMail"*/}
                                    {/*onChange={this.onChangeMail.bind(this)}/></div>*/}
                    {/*<div>备注: <input type="text" value={this.state.note} ref="updateNote"*/}
                                    {/*onChange={this.onChangeNote.bind(this)}/></div>*/}
                {/*</div>*/}

                {/*<div>*/}
                    {/*<button onClick={this.OnUpdateUser.bind(this)}>确认修改</button>*/}
                {/*</div>*/}

            {/*</div>*/}

            <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="margin">姓名：<input type="text" value={this.state.name} ref="updateName" className="updateName"
                                                               onChange={this.onChangeName.bind(this)}/></div>

                            <div className="margin">性别：<input type="text" value={this.state.age} className="updateSex"
                                                              ref="age" onChange={this.onChangeSex.bind(this)}/></div>

                            <div className="margin">年龄：<input type="text" value={this.state.sex} className="updateAge"
                                                              ref="sex" onChange={this.onChangeAge.bind(this)}/></div>

                            <div className="margin">电话：<input type="text" value={this.state.tel}
                                                                className="telephone" ref="updateTel"
                                                                onChange={this.onChangeTel.bind(this)}/></div>

                            <div className="margin">邮箱：<input type="text" value={this.state.email} className="updateMail"
                                                              ref="email" onChange={this.onChangeMail.bind(this)}/></div>

                            <div className="margin">备注：<input type="text" value={this.state.note} className="updateNote"
                                                              ref="other" onChange={this.onChangeNote.bind(this)}/></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this._OnUpdateUser.bind(this)}>
                                确认更改
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}
