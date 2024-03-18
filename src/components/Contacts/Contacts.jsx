import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        <div className="flexColStart flexCenter c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            We help you by providing the best services
          </span>

          <div className="flexColStart contactModes">
            {/* Ist row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 234 324 4433</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* IImode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 234 324 4433</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* IInd row */}

            <div className="flexStart row">
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 234 324 4433</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div> */}

              {/* IImode */}

              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 234 324 4433</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div> */}
            </div>
          </div>
        </div>
        <div className=" flexCenter c-right">
          <div className="image-container">
            <img src="./contact.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
