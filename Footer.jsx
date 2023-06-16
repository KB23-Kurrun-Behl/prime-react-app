import React from "react";

function Footer() {
  return (
    <footer>
      <div className="column">
        <h5 className="footer-heading">FLAVORS</h5>
        <p className="footer-information">Blue Raspberry</p>
        <p className="footer-information">Orange</p>
        <p className="footer-information">Tropical Punch</p>
        <p className="footer-information">Lemon Lime</p>
        <p className="footer-information">Grape</p>
        <p className="footer-information">Ice Pop</p>
        <p className="footer-information">Terms of Service</p>
        <p className="footer-information">Refund Policy</p>
      </div>

      <div className="column-2">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <h5 className="footer-heading">ABOUT PRIME</h5>
        <p className="footer-information">Where To Buy</p>
        <p className="footer-information">FAQ</p>
        <p className="footer-information">Terms Of Use</p>
        <p className="footer-information">Privacy Policy</p>
        <p className="footer-information">Contact Us</p>
      </div>

      <div className="column-3">
        <h5 className="footer-heading">NEWSLETTER</h5>
        <p className="footer-information">
          Subscribe to receive updates, exclusive deals and more.
        </p>
        <form action="index" method="post">
          <input
            className="enter-email"
            type="text"
            name="email"
            placeholder="Email"
          ></input>
          <br></br>
          <div className="check-box-container">
            <input className="check-box" type="checkbox" name="check"></input>
            <p className="check-box-information">
              By signing up, you agree to receive marketing emails<br></br>from
              Prime Hydration at the number used.
            </p>
          </div>
          <button className="subscribe-btn">SUBSCRIBE</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
