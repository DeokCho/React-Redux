import React, {Component} from 'react';
import '../../assets/join.css'
import userActions from "../../actions/user.action";
import {connect} from "react-redux"

class Join extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            userid:'',
            passwd:'',
            passwd_repeat:'',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const{name, value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({submitted: true})
        const{userid, passwd, passwd_repeat} = this.state
        if(userid && passwd && passwd_repeat){
            this.props.join(userid, passwd, passwd_repeat)
        }
    }

    render() {
        const{userid, passwd, passwd_repeat, submitted} = this.state
        const helpBlock = {color:"red"}
        const temp = {}
        return (
            <div>
                <form action="form" style={temp} onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                        <label htmlFor="userid"><b>UserID</b></label>
                        <input type="text" placeholder="Enter userid" name="userid"
                               value={userid} onChange={this.handleChange}/>
                        {submitted && !userid && <div style={helpBlock}>아이디는 필수 입력값입니다.</div>
                        }
                        <label htmlFor="passwd"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="passwd"
                            value={passwd} onChange={this.handleChange}/>
                        {submitted && !passwd && <div style={helpBlock}>비밀번호는 필수 입력 값입니다.</div>}

                        <label htmlFor="passwd-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="passwd_repeat"
                            value={passwd_repeat} onChange={this.handleChange}/>
                        {submitted && !passwd_repeat && <div style={helpBlock}>비밀번호 확인은 필수 입력 값입니다.</div>}
                        <label>
                            <input type="checkbox" name="remember" style={temp}/>
                        </label>

                        <p>By creating an account you agree to our <a href="#" style={temp}>Terms
                            & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="button" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state){
    const{logginIn} = state.userReducers
    return {logginIn}
}

const actionCreator = {
    join: userActions.join
}
const connectedJoinPage = connect(mapStateToProps, actionCreator)(Join)

export {connectedJoinPage as Join}



