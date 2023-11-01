import React from 'react';
import twitterLogo from "../src/images/twitter.svg";
import instagramLogo from "../src/images/instagram.svg";
import facebookLogo from "../src/images/facebook.svg";
import GitHubLogo from "../src/images/github.svg";

export default function Footer(){
    return(
        <div className="page-footer">
            <a href="https://www.twitter.com/99Tollar">
                <img src= {twitterLogo}
                    className="twitter-icon">
                </img>
            </a>
            <a href="https://www.instagram.com/vic_kanchez">
                <img src= {instagramLogo}
                    className="instagram-icon">
                </img>
            </a>
            <a href="https://wwww.GitHub.com/macmini62">
                <img src= {GitHubLogo}
                    className="github-icon">
                </img>
            </a>
            <a href="">
                <img src= {facebookLogo}
                    className="facebook-icon">
                </img>
            </a>
        </div>
    )
}


