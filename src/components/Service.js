import React from "react";
import GrowImg from "../assets/illustration-grow-together.svg";
import FlowImg from "../assets/illustration-flowing-conversation.svg";
import UsersImg from "../assets/illustration-your-users.svg";

const Service = () => {
    return (
        <section className="service-center">
            <div className="single-service">
                <div className="service-img">
                    <img src={GrowImg} alt="" />
                </div>
                <div className="service-info">
                    <h2>Grow Together</h2>
                    <p>
                        Generate meaningful discussions with your audience and
                        build a strong, loyal community. Think of the insightful
                        conversations you miss out on with a feedback form.
                    </p>
                </div>
            </div>
            <div className="single-service">
                <div className="service-img">
                    <img src={FlowImg} alt="" />
                </div>
                <div className="service-info">
                    <h2>Flowing Conversations</h2>
                    <p>
                        You wouldn't paginate a conversation in real life, so
                        why do it online? Our threads have just-in-time loading
                        for a more natural flow.
                    </p>
                </div>
            </div>
            <div className="single-service">
                <div className="service-img">
                    <img src={UsersImg} alt="" />
                </div>
                <div className="service-info">
                    <h2>Your Users</h2>
                    <p>
                        It takes no time at all to integrate Huddle with your
                        app's authentication solution. This means, once signed
                        in to your app, your users can start chatting
                        immediately.
                    </p>
                </div>
            </div>
            <div className="call-to-action">
                <h2>Ready To Build Your Community?</h2>
                <button className="btn btn-pink">Get Started For Free</button>
            </div>
        </section>
    );
};

export default Service;
