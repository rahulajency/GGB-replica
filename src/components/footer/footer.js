import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <div className='footer' >
            <div className='social'>
                <h3 className='social-txt' >We are Social!</h3>
                <h4 className="social-content">We are present on your favorite social networks. Do like/follow and we will share weekly menu, new bowl alerts and the occasional offers.</h4>
            </div>
            <div className='fb-box' >
                <div className='fb-box-wrapper' href='https://www.facebook.com/GreenGrainBowl/' >
                    <a className='fb-box-img-wrapper' >
                        <img className='fb-box-img' src='https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-0/p235x350/96377281_682157492601108_7957077470241357824_n.jpg?_nc_cat=100&ccb=3&_nc_sid=dd9801&_nc_ohc=0VZWmJzhOOoAX8QpKX_&_nc_ht=scontent-bom1-2.xx&tp=6&oh=47e3f451cac5087c153742bd1a542c21&oe=605F2366' />
                    </a>
                    <div className='fb-box-content'>
                        <div className='fb-box-content-img'>
                            <img className='logo' src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-1/cp0/p80x80/64862789_453576935459166_9193094248289796096_n.png?_nc_cat=111&ccb=3&_nc_sid=dbb9e7&_nc_ohc=fR3Vl0uV0zoAX9DRuf4&_nc_ht=scontent-bom1-2.xx&tp=-30&oh=97e440a1b85d23661bd2b19c3cf56af1&oe=6060EF19" height='50' width='50' />
                        </div>
                        <div className='fb-box-content-txt'>
                            <a href='https://www.facebook.com/GreenGrainBowl/' className='title' >Green Grain Bowl</a>
                            <div className="likes">475 likes</div>
                        </div>
                    </div>
                    <div className='fb-box-footer' >
                        <div>
                            <a href='https://www.facebook.com/GreenGrainBowl/' >Like Page</a>
                        </div>
                        <div>
                        <button className="fb-box-footer-btn" type="submit" value="1"><i alt="" className="logo"></i>Send Message</button>
                        </div>
                        
                    </div>
                </div>
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