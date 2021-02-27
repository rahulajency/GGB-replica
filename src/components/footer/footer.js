import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <div className='footer' >
            <div className='social'>
                <h3 className='social-txt' >We are Social!</h3>
                <h4 className="social-content">We are present on your favorite social networks. Do like/follow and we will share weekly menu, new bowl alerts and the occasional offers.</h4>
            </div>
            <div class="follow-instagram">
                <a className='follow-instagram-link' href="https://www.instagram.com/greengrainbowl/" target="_blank">
                    <img src="https://greengrainbowl.com//assets/images/follow-instagram.png" className="follow-instagram-img" alt="green grain bowl" title="follow us on instagram" />
                </a>
			</div>
        </div>
    )
}

export default Footer;