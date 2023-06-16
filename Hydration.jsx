import React from "react";

function Hydration() {
  return (
    <div>
      <div id="products" className="products-container">
        <div className="product-row">
          <div className="product">
            <img
              className="product-img"
              src={require('../components/images/ice-pop.png')}
              alt="product-img"
            ></img>
              <img
              className="product-img"
              src={require('../components/images/lemonade.png')}
              alt="product-img"
            ></img>
              <img
              className="product-img"
              src={require('../components/images/strawberry-w.png')}
              alt="product-img"
            ></img>
              <img
              className="product-img"
              src={require('../components/images/meta-moon.png')}
              alt="product-img"
            ></img>
                          <img
              className="product-img"
              src={require('../components/images/tropical-punch.png')}
              alt="product-img"
            ></img>
          </div>
          {/* <div className="product-text-row">
            <div className="product-text-container-1">
                <h2 className="product-title">Ice Pop</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-2">
                <h2 className="product-title">Lemonade</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-3">
                <h2 className="product-title">Strawberry<br />Watermelon</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-4">
                <h2 className="product-title">Meta Moon</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-4">
                <h2 className="product-title">Tropical<br />Punch</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hydration;
