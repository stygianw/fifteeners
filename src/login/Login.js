import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    
    handleLogin(e) {
        this.setState({login: e.target.value});
    }

    handlePassword(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <div style={{float:"left"}}>
                            <label htmlFor="">login</label>
                        </div>
                        
                        <div style={{float:"right"}}>
                            <input type="text" name='login' onChange={this.handleLogin}/>
                        </div>
                    </div>
                    <div>
                        <div style={{float:"left"}}>
                            <label htmlFor="">password</label>
                        </div>
                        <div style={{float:"right"}}>
                            <input type="password" name='password' onChange={this.handlePassword}/>
                        </div>
                    </div>
                </form>
                {this.state.login}
                {this.state.password}
            </div>
        );
    }
}

export default LoginComponent;
