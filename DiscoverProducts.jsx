import React from 'react';

function DiscoverProducts() {
    return (
        <div>
              <div className="more-products-container">
                    <img className="blue-ksi-img" src={require('../components/images/index-img.jpg')} alt="ksi-img"></img>
                    <div className="more-products-text-container">
                        <h1 className="discover-flavour-title">DISCOVER YOUR<br></br>FAVORITE FLAVOUR</h1>
                        <p className="discover-flavour-overview">TAG US <span className="at-symbol">@DRINKPRIME</span> WITH YOUR FAVORITE FLAVOUR</p>
                        <button className="view-more-btn" href="products">SHOP DRINKS</button>
                    </div>
            </div>
            
        </div>
    );
}

export default DiscoverProducts