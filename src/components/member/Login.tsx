import React, {Component} from "react";
import '../../assets/login.css'
import userActions from '../../actions/user.action'
import {connect} from "react-redux";

class Login extends Component<any, any>{
    constructor(props){
        super(props);
        this.state = {
            userid:'',
            passwd:'',
            name:'',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const{name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit(e){
        e.preventDefault()
        alert('폼태그 알러트')
        this.setState({submitted:true})
        const{userid, passwd} = this.state
        if(userid && passwd){
            this.props.login(userid, passwd)
        }
    }
    
    render(){
        const { userid, passwd, submitted } = this.state
        const helpBlock = {color:"red"}
        return <div>
            <h2>Login Form</h2>
            <form action="form" onSubmit={this.handleSubmit}>
                <div style={helpBlock} className="imgcontainer">
                    <img id={"avatar"} src="data:image/jpeg;base64,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" alt="Avatar" className="avatar"/>
                </div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid" value={userid}
                           onChange={this.handleChange}
                           />
                    {submitted && !userid &&
                        <div style={helpBlock}>이 아이디는 필수 입력값입니다.</div>
                    }
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="passwd" value={passwd}
                           onChange={this.handleChange}
                           />
                    {submitted && !passwd &&
                    <div style={helpBlock}>비밀번호는 필수 입력 값입니다.</div>
                    }
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked={true} name="remember"/> Remember me
                    </label>
                </div>
                <div className="container">
                    <button  type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    }
}

function mapStateToProps(state){
    const{logginIn} = state.userReducers
    return {logginIn}
}
const actionCreators = {
    login: userActions.login
}
const connetedLoginPage = connect(mapStateToProps, actionCreators)(Login)

export {connetedLoginPage as Login}