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
  }

  renderLoginState(){
    if(this.state.isLogin){
      return(
        <div className="credential-field">
          <div className="toggle-login">
            <a href="javascript:void(0)" onClick={this.signup}>SIGN UP</a>
            <a href="javascript:void(0)" class="active" onClick={this.login}>LOGIN</a>
          </div>
          <div className="sign-up-form">
            <form action="">
              <input className="username" type="text" name="email" placeholder="Email"/>
              <input className="password" type="text" name="password" placeholder="Password"/>
              <button type="submit" value={this.buttonMessage}>LOG IN</button>
            </form>
          </div>
        </div>
      );
    }
    return(
      <div className="credential-field">
        <div className="toggle-login">
          <a href="javascript:void(0)" class="active" onClick={this.signup}>SIGN UP</a>
          <a href="javascript:void(0)" onClick={this.login}>LOGIN</a>
        </div>
        <div className="sign-up-form">
          <form action="">
            <input className="username" type="text" name="username" placeholder="Username"/>
            <input className="email" type="text" name="email" placeholder="Email"/>
            <input className="password" type="text" name="password" placeholder="Password"/>
            <button type="submit" value={this.buttonMessage}>SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }

  // componentWillMount() {;
  //   if (typeof values.someString === 'undefined') {
  //     debugger;
  //   } else {
  //     debugger;
  //   }
  // }
  // componentDidMount() {
  //   const {values} = this.props;
  //   if (typeof values.someString === 'undefined') {
  //     debugger;
  //   } else {
  //     debugger;
  //   }
  // }
  // componentWillReceiveProps(newProps) {
  //   const {values} = newProps;
  //   if (typeof values.someString === 'undefined') {
  //     debugger;
  //   } else {
  //     debugger;
  //   }
  // }

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
}
