import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  const socialMedia = [
    "/assets/002-facebook-logo.png", 
    "/assets/001-twitter-logo-silhouette.png",
    "/assets/004-linkedin-logo.png",
    "/assets/instagram (1).png",
    "/assets/005-youtube.png",
  ];
  const facilityList = ["About zDrop", "FAQ & Support", "Terms & Conditions", "Privacy Policy"];
  const transectionList = [
    "/assets/BKash-bKash-Logo.wine.png", 
    "/assets/nagad-logo-7A70CCFEE0-seeklogo.com.png",
    "https://ibtbd.net/wp-content/uploads/2017/08/rocket.jpg",
    "/assets/g4158.png",
    "/assets/Mastercard-logo.png",
    "/assets/amex-logo-png.png",
  ];
  const contactUs = [
    {
      title: "Hotline",
      icon: "/assets/customer-service-2-line.png",
      info: "+8801929459195 (10am-10pm/Sat-Thur)"
    },
    {
      title: "Whole Sales",
      icon: "/assets/phone-line.png",
      info: "01929459195 (10am-12pm)"
    },
    {
      title: "Email",
      icon: "/assets/mail-send-line.png",
      info: "support.example@gmail.com"
    },
  ]
  return (
    <div className="footer">
      <Row>
        <Col xs={6} md={4} className="footer_left" >
          <img src="/assets/1777illustrate.PNG" alt="" />
        </Col>
        <Col xs={12} md={5} className="footer_main">
          <div className="footer_social_media">
            {
            socialMedia.map((item, i) => 
            <img src={item} alt="" key={i}/>)
            }
          </div>
          <div className="footer_subscript">
            <h5>Subscribe</h5>
            <p>Get the latest news from zDrop</p>
            <form>
              <div className="form_control">
                <input type="text" placeholder="Email Address"/>
                <i class="fas fa-paper-plane"></i>
              </div>
            </form>
          </div>
          <div className="footer_facility">
            {
              facilityList.map((item, i) => 
              <strong key={i}>{item}</strong>
              )
            }
          </div>
          <div className="footer_transection">
            {
              transectionList.map((item, i) => 
              <div>
                <img src={item} alt="" key={i}/>
              </div>
              )
            }
          </div>
        </Col>
        <Col xs={6} md={3}>
            <div className="footer_contact">
              <h5>Contact Us</h5>
              {
                contactUs.map((item, i) => 
                <div className="contact_option" key={i}>
                  <img src={item.icon} alt=""/>
                  <div>
                    <strong>{item.title}</strong> <br/>
                    <p>{item.info}</p>
                  </div>
                </div>
                )
              }
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;