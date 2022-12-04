import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        {/* <p>Download App for Android and IOS mobile phone</p> */}
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Eshoppers</h1>
        <p>Quality is our first priority</p>

        <p> &copy; Md.Rashedujjaman</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.linkedin.com/in/rashedujjaman-rion/">LinkedIn</a>
        <a href="https://t.me/rashed_rion">Telegram</a>
        <a href="https://web.facebook.com/CseRashedrion">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
