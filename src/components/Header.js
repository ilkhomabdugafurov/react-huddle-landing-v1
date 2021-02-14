import React from "react";
import Logo from "../assets/logo.svg";
import HeroImg from "../assets/illustration-mockups.svg";
import BgImg from "../assets/bg-hero-mobile.svg";

const Header = () => {
    return (
        <header className="header" style={{backgroundImage: `${BgImg}`}}>
            <div className="header-center">
                <nav className="nav-bar">
                    <img className="nav-img" src={Logo} alt="logo" />
                    <button className="btn nav-btn">Try It Free</button>
                </nav>
                <div className="hero">
                    <div className="hero-left">
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as you engage in genuine
                            discussion.
                        </p>
                        <button className="btn btn-pink">Get Started For Free</button>
                    </div>
                    <div className="hero-right">
                        <img className="hero-img" src={HeroImg} alt="mockups"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
