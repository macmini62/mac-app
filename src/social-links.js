import React from 'react';
import emailLogo from "../src/images/envelope-fill.svg";
import linkedinLogo from "../src/images/linkedin.svg";


export default function SocialLinks() {

    const handleEmailClick = ()=>{
        window.location.href = "mailto:https://victorkangacha@gmail.com";
    };

    const handleLinkedinClick = ()=>{
        window.location.href = "https://www.linkedin.com/in/victorkangacha";
    };

    return(

        <div className="social-links">
            <span className="email-acc" onClick={handleEmailClick}>
                <img src= {emailLogo} className="email-icon" alt="email icon"></img>
                Email
            </span>
            <span className="linkedin-acc" onClick={handleLinkedinClick}>
                <img src= {linkedinLogo} className="linkedin-icon" alt="linkedin icon"></img>
                LinkedIn
            </span>
        </div>

        )  
}

