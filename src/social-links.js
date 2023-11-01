import React from 'react';
import emailLogo from "../src/images/envelope-fill.svg";
import linkedinLogo from "../src/images/linkedin.svg";

export default function SocialLinks() {
    
    LinkedinContact();
    EmailContact();
        
    return(
        <div className="social-links">
            <span className="email-acc">
                <img src= {emailLogo} className="email-icon"></img>
                <a href="mailto:https://victorkangacha@gmail.com" id="email-link">Email</a>
            </span>
            <span className="linkedin-acc">
                <img src= {linkedinLogo} className="linkedin-icon"></img>
                <a href="https://www.linkedin.com/in/victorkangacha" id="linkedin-link">linkedIn</a>
            </span>
        </div>
    )

}


function LinkedinContact(){
    const linkedinLink = document.getElementById("linkedin-link");
    const linkedinAcc = document.querySelector(".linkedin-acc");

    return(
        linkedinAcc.addEventListener("click", ()=>{
            linkedinLink.click();
        })
    );
}

function EmailContact(){
    const emailLink = document.getElementById("email-link");
    const emailAcc = document.querySelector(".email-acc");

    return(
        emailAcc.addEventListener("click", ()=>{
            emailLink.click();
        })
    );

}

