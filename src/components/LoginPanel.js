import React from 'react';
import '../styles/Login.css';

export default class LoginPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      buttonMessage: "LOG IN"
    };
    this.login = this.login.bind(this);
    this.signup = this.singup.bind(this);
    this.makeLoginRequest = this.makeLoginRequest.bind(this);
    this.makeSignupRequest = this.makeSignupRequest.bind(this);
  }

  renderLoginState(){
    if(this.state.isLogin){
      return(
        <div className="credential-field">
          <div className="toggle-login">
            <a href="javascript:void(0)" onClick={this.signup}>SIGN UP</a>
            <a href="javascript:void(0)" className="active" onClick={this.login}>LOGIN</a>
          </div>
          <div className="sign-up-form">
            <form onSubmit={this.makeLoginRequest} >
              <input className="email" ref="loginemail"type="text" name="email" placeholder="Email"/>
              <input className="password" ref="loginpass" type="text" name="password" placeholder="Password"/>
              <button type="submit" value={this.buttonMessage} >LOG IN</button>
            </form>
          </div>
        </div>
      );
    }
    return(
      <div className="credential-field">
        <div className="toggle-login">
          <a href="javascript:void(0)" className="active" onClick={this.signup}>SIGN UP</a>
          <a href="javascript:void(0)" onClick={this.login}>LOGIN</a>
        </div>
        <div className="sign-up-form">
          <form onSubmit={this.makeSignupRequest}>
            <input className="username" ref="signupuser" type="text" name="username" placeholder="Username"/>
            <input className="email" ref="signupemail" type="text" name="email" placeholder="Email"/>
            <input className="password" ref="signuppass" type="text" name="password" placeholder="Password"/>
            <button type="submit" value={this.buttonMessage}>SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLoginState()}
      </div>
    );
  }

  login() {
    this.setState({ isLogin: true });
    this.setState({ buttonMessage: "LOG IN"});
  }
  singup() {
    this.setState({ isLogin: false });    
    this.setState({ buttonMessage: "SIGN UP"});
  }

  makeLoginRequest(event) {
    event.preventDefault();
    var data = "email=" + this.refs.loginemail.value + "&password=" + this.refs.loginpass.value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if(this.status === 404 || this.status === 401) {
          alert("Something went wrong. Please re-enter your login information.");
        } else {
          var body = JSON.parse(this.response);
          if(body.user_username === undefined) { 
            alert("Welcome back!");
          } else {
            alert("Welcome back, " + body.user_username + ".")
          }
        }
      }
    });
    xhr.open("POST", "http://dev3.apppartner.com/Reactors/scripts/user-login.php");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }

  makeSignupRequest(event) {
    event.preventDefault();    
    var data ="username=" + this.refs.signupuser.value + "&email=" + this.refs.signupemail.value + "&password=" + this.refs.signuppass.value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var body = JSON.parse(this.response);        
        if(this.status === 400) {
          alert(body.message);      
        } else {
          alert("Signed in successfully. Your user id is: " + body.user_id);
        }
      }
    });
    xhr.open("POST", "http://dev3.apppartner.com/Reactors/scripts/user-signup.php");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }
}
