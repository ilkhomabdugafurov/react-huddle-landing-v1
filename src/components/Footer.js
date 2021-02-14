import React from "react";
import LogoWhite from "../assets/logo-white.svg";
import LocationIcon from "../assets/icon-location.svg";
import PhoneIcon from "../assets/icon-phone.svg";
import EmailIcon from "../assets/icon-email.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-center">
                <div className="footer-img">
                    <img src={LogoWhite} alt="" />
                </div>
                <div className="footer-columns">
                    <div className="footer-col-1">
                        <div className="location">
                            <div className="location-img">
                                <img src={LocationIcon} alt="" />
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Commodi labore vel repellendus
                                totam at ducimus facere velit dolorum vitae
                                blanditiis!
                            </p>
                        </div>
                        <div className="phone">
                            <div className="phone-img">
                                <img src={PhoneIcon} alt="" />
                            </div>
                            <p>+998 ** *** ** **</p>
                        </div>
                        <div className="email">
                            <div className="email-img">
                                <img src={EmailIcon} alt="" />
                            </div>
                            <p>johngafurov@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <ul>
                            <li>About Us</li>
                            <li>What We Do</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-col-3">
                        <ul>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <ul className="social-icons">
                            <li className="fab fa-facebook-f"></li>
                            <li className="fab fa-twitter"></li>
                            <li className="fab fa-instagram"></li>
                        </ul>
                    </div>
                </div>
                <div className="copy">
                    &copy; Copyright 2018 Huddle. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
