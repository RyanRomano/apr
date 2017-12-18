import React from 'react';
import '../styles/Home.css';


export default class NewsletterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.makePostRequest = this.makePostRequest.bind(this);
  }

  render() {
    return (
      <div className="section-newsletter">
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <form onSubmit={this.makePostRequest}>
          <input type="text" ref="subscribe" placeholder="Your Email"/>
          <input type="submit" value="Subscribe"/>
        </form>
      </div>
    );
  }

  makePostRequest(event) {
    event.preventDefault();    
    var email = this.refs.subscribe.value;
    var data = "email=" + email;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var body = JSON.parse(this.response);
        this.validateEmail = function(useremail) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(useremail.toLowerCase());
        }
        if(this.validateEmail(email)){
          alert(body.message);
        } else {
          alert("Enter a valid email to subscribe to our newsletter.");
        }
      }
    });
    xhr.open("POST", "http://dev3.apppartner.com/Reactors/scripts/add-email.php");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }
}
