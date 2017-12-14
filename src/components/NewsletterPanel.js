import React from 'react';
import '../styles/Home.css';


export default class NewsletterPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-newsletter">
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <form action="">
          <input type="text" name="email" placeholder="Your Email"/>
          <input type="submit" value="Subscribe"/>
        </form>
      </div>
    );
  }
}
