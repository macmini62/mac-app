import React from 'react';
import emailLogo from "../src/images/envelope-fill.svg";
import linkedinLogo from "../src/images/linkedin.svg";

export default function SocialLinks(){
    return(
        <div className="social-links">
            <span className="email-link">
                <img src= {emailLogo}></img>
                <a href="https://victorkangacha@gmail.com">Email</a>
            </span>
            <span className="linkedIn-link">
                <img src= {linkedinLogo}></img>
                <a href="https://www.linkedin.com/in/victorkangacha">linkedIn</a>
            </span>
        </div>
    )
}
