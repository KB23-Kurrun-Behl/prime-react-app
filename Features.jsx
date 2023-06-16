import React from 'react';

function Features() {
    return (
    <div>
        <div className="product-features-container">
        <div className="features-row">
            <div className="feature">
            <img className="feature-img" src={require('../components/images/feature-one.png')} alt="feature-img"></img>
            </div>
            <div className="feature">
            <img className="feature-img" src={require('../components/images/feature-two.png')} alt="feature-img"></img>
            </div>
            <div className="feature">
            <img className="feature-img" src={require('../components/images/feature-three.png')} alt="feature-img"></img>
            </div>
            <div className="feature">
            <img className="feature-img" src={require('../components/images/feature-four.png')} alt="feature-img"></img>
            </div>
            <div className="feature">
            <img className="feature-img" src={require('../components/images/feature-five.png')} alt="feature-img"></img>
            </div>
        </div>
    </div>
    </div>
);
}

export default Features;