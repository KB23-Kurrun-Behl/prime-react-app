import React from 'react';
// import herovideo from '../components/images/prime.mp4';

function HeroVideo() {
  return (
    <div className="video-container">
    {/* <h1 className="hero-overview">STOCKING SHELVES NOW</h1>
    <h1 className="hero-title">ICE POP ENERGY</h1> */}
    {/* <video className="hero-video" src={herovideo} type="video/mp4" loop autoPlay muted></video> */}
    <img className="hero-video" src={require('../components/images/hero-img.png')} alt="hero-img"></img>
    </div>
  );
}

export default HeroVideo
