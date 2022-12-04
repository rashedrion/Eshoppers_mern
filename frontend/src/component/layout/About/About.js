import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          {/* -------------------------------------------------------- */}

          {/* ---------------------------------------------- */}
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660334127/avatars/29695018_1824368471198638_6609610735428014082_n-removebg-preview_khhjqj.png"
              alt="Founder"
            />
            <Typography>
              {/* <h1>Rasheddujjaman</h1> */}
              <p>
                I am Rashedujjaman . My home town sherpur sadar, sherpur.I am a
                student of 49th batch Department of CSE , Daffodil International
                University .I wanna be Programmer in my Future. In my leisure
                time i like to do reading books, programming etc.
              </p>
            </Typography>

            <div className="flx">
              <span className="icon">
                <a href="https://www.facebook.com/CseRashedrion">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320311/avatars/icons8-facebook-144_mf2lxw.png"
                    alt="Facebook"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="*">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-whatsapp-144_hg77xb.png"
                    alt="whatsapp"
                  ></img>
                </a>
              </span>
              <span className="icon">
                <a href="https://www.linkedin.com/in/rashedujjaman-rion/">
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660320100/avatars/icons8-linkedin-144_sw3jes.png"
                    alt="linkedin"
                  ></img>
                </a>
              </span>
            </div>
          </div>

          {/* --------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default About;
