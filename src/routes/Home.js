import React from 'react';
import '../styles/Home.css';

export default () => (
  <div className="home-container">
    <div className="section-banner">
      <img src={require('../assets/banner.png')} alt="reactor"/>
      <a className="logo" href="/">Reactor</a>
      <a className="login-link" href="/login">Log In</a>
      <h1>Hello, welcome to Reactor</h1>
    </div>
    <div className="section-about">
      <h2>WHAT WE DO</h2>
      <div className="about-right">
        <h4>We do</h4>
        <p>The quick, brown fox jumps over a lazy dog.</p>
        <p>DJs flock by when MTV ax quiz prog.</p>
        <p>Junk MTV quiz graced by fox whelps.</p>
        <p>Bawds jog, flick quartz, vex nymphs.</p>
      </div>
    </div>
    <div className="section-featured">
      <div className="featured-item">
        <img className="small-images" src={require('../assets/1.png')} alt="desk"/>
        <div className="featured-item-blurb">
          <h4>Regional Cuisine Down Home Southern Cooking</h4>
          <p>The quick, brown fox jumps over a lazy</p>
          <p>dog. DJs flock by when MTV ax quiz prog.</p>
          <p>Junk MTV quiz graced by fox whelps.</p>
          <p>Bawds jog, flick quartz, vex nymphs.</p>
        </div>
      </div>
      <div className="featured-item">
        <img className="small-images" src={require('../assets/2.png')} alt="bowl"/>
        <div className="featured-item-blurb">
          <h4>Pos Hardware More Options In Less Space</h4>
          <p>The quick, brown fox jumps over a lazy</p>
          <p>dog. DJs flock by when MTV ax quiz prog.</p>
          <p>Junk MTV quiz graced by fox whelps.</p>
          <p>Bawds jog, flick quartz, vex nymphs.</p>
        </div>
      </div>
    </div>
    <div className="section-locations">
      <h3>Maui By Air The Best Way Around The Island</h3>
      <div className="location-items">
        <div className="location-item">
          <img className="small-images" src={require('../assets/3.png')} alt="East Josianefurte"/>
          <h5>East Josianefurte</h5>
          <caption>085 Daron Via</caption>
        </div>
        <div className="location-item">
          <img className="small-images" src={require('../assets/4.png')} alt="South Cristopherport"/>
          <h5>South Cristopherport</h5>
          <caption>162 Chandler Ville</caption>
        </div>
        <div className="location-item">
          <img className="small-images" src={require('../assets/5.png')} alt="Concepcionbury"/>
          <h5>Concepcionbury</h5>
          <caption>7643 Kylie Burgs</caption>
        </div>
        <div className="location-item">
          <img className="small-images" src={require('../assets/6.png')} alt="Reychester"/>
          <h5>Reychester</h5>
          <caption>5590 Gabe Views Apt. 044</caption>
        </div>
      </div>
    </div>
    <div className="section-newsletter">
      <h2>SUBSCRIBE TO NEWSLETTER</h2>
      <form action="">
        <input type="text" name="email" placeholder="Your Email"/>
        <input type="submit" value="Subscribe"/>
      </form>
    </div>
    <div className="section-footer"><p>Footer</p></div>
  </div>
);