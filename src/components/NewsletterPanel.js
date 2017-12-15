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
        <form action="">
          <input type="text" ref="email" name="email" placeholder="Your Email"/>
          <input type="submit" onClick={this.makePostRequest} value="Subscribe" onSubmit="return false"/>
        </form>
      </div>
    );
  }

  makePostRequest() {
    var data = "email=" + this.refs.email.value;
    
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function () {
        console.log(this.responseText);
        alert(this.responseText);
    });
    
    xhr.open("POST", "http://dev3.apppartner.com/Reactors/scripts/add-email.php");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    
    xhr.send(data);
  }

}
