import React from "react";
import img from "./images/profile1.jpg";
import MyDetails from "./my-details";
import SocialLinks from "./social-links";
import ContentBody from "./content-body";
import Footer from "./footer";

export default function MacApp(){
    return (
        <div className="page-body">
            <div className="profile-img">
                <img src={img}></img>
            </div>
            <MyDetails />
            <SocialLinks />
            <ContentBody />
            <Footer />
        </div>
    )
}