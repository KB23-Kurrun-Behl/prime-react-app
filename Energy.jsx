import React from "react";

function Energy() {
  return (
    <div>
      <div className="products-container">
        <div className="product-row">
          <div className="product">
            <img
              className="product-img"
              src={require('../components/images/ice-pop-e.png')}
              alt="product-img"
            ></img>
              <img
              className="product-img"
              src={require('../components/images/blue-ras-e.png')}
              alt="product-img"
            ></img>
              <img
              className="product-img"
              src={require('../components/images/tropical-punch-e.png')}
              alt="product-img"
            ></img>
              <img
              className="product-img"
              src={require('../components/images/strawberry-w-e.png')}
              alt="product-img"
            ></img>
                          <img
              className="product-img"
              src={require('../components/images/orange-mango-e.png')}
              alt="product-img"
            ></img>
          </div>
          <div className="product-text-row">
            <div className="product-text-container-1">
                <h2 className="product-title">Ice Pop</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-2">
                <h2 className="product-title">Blue<br />Raspberry</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-3">
                <h2 className="product-title">Tropical<br />Punch</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="product-text-container-4">
                <h2 className="product-title">Strawberry<br />Watermelon</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>

              <div className="product-text-container-5">
                <h2 className="product-title">Orange<br />Mango</h2>
                <p className="product-price">$3.28</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Energy;
