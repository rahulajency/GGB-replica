import React from 'react';
import './footer.scss';
import config from '../../assets/config/config';

const Footer = () => {
    return(
        <div className='footer' >
            <link crossOrigin="anonymous" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" rel="stylesheet"></link>
            <div className='social'>
                <h3 className='social-txt' >{config.SOCIAL_MEDIA.SOCIAL_TEXT}</h3>
                <h4 className="social-content">{config.SOCIAL_MEDIA.SOCIAL_CONTENT}</h4>
            </div>
            <div className='fb-box' >
                <div className='fb-box-wrapper' href='https://www.facebook.com/GreenGrainBowl/' >
                    <a className='fb-box-img-wrapper' href='#' >
                        <img className='fb-box-img' src='https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-0/p235x350/96377281_682157492601108_7957077470241357824_n.jpg?_nc_cat=100&ccb=3&_nc_sid=dd9801&_nc_ohc=0VZWmJzhOOoAX8QpKX_&_nc_ht=scontent-bom1-2.xx&tp=6&oh=47e3f451cac5087c153742bd1a542c21&oe=605F2366' />
                    </a>
                    <div className='fb-box-content'>
                        <div className='fb-box-content-img'>
                            <a href='https://www.facebook.com/GreenGrainBowl/' target="_blank">
                                <img className='logo' src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-1/cp0/p80x80/64862789_453576935459166_9193094248289796096_n.png?_nc_cat=111&ccb=3&_nc_sid=dbb9e7&_nc_ohc=fR3Vl0uV0zoAX9DRuf4&_nc_ht=scontent-bom1-2.xx&tp=-30&oh=97e440a1b85d23661bd2b19c3cf56af1&oe=6060EF19" height='50' width='50' />
                            </a>
                            
                        </div>
                        <div className='fb-box-content-txt'>
                            <a href='https://www.facebook.com/GreenGrainBowl/' className='title' target="_blank" >{config.SHARED_ITEMS.APP_NAME}</a>
                            <div className="likes">{config.SOCIAL_MEDIA.FACEBOOK_LIKES}</div>
                        </div>
                    </div>
                    <div className='fb-box-footer' >
                        <div className='like-page-wrapper'>
                            <a href='https://www.facebook.com/GreenGrainBowl/' className='like-page' target="_blank" >
                                <i className="fab fa-facebook fb-logo"></i>
                                {config.SOCIAL_MEDIA.LIKE_PAGE}
                            </a>
                        </div>
                        <div>
                        <a className="fb-box-footer-btn" target="_blank" href='https://www.facebook.com/sharer/sharer.php?app_id=168413963274202&u=https%3A%2F%2Fwww.facebook.com%2FGreenGrainBowl%2F&display=popup&ref=plugin&src=page' type="submit" value="1">
                            <i className="fa fa-share share-logo"></i>
                            {config.SOCIAL_MEDIA.SHARE}</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="follow-instagram">
                <a className='follow-instagram-link' href="https://www.instagram.com/greengrainbowl/" target="_blank">
                    <img src="https://greengrainbowl.com//assets/images/follow-instagram.png" className="follow-instagram-img" alt="green grain bowl" title="follow us on instagram" />
                </a>
			</div>
            <div className='whatsapp-msg'>
                <div className='whatsapp-msg-txt'>
                    {config.SOCIAL_MEDIA.REACH_VIA_WHATSAPP}
                </div>
                <div className='whatsapp-msg-btn-wrapper' >
                    <a className='whatsapp-msg-btn' href='https://api.whatsapp.com/send/?phone=917770004258&text=Hi&app_absent=0' target="_blank">
                        <div className='btn-txt-wrapper'>
                            <span className="txt">{config.SOCIAL_MEDIA.SEND_US_MSG}<i className="fab fa-whatsapp whatsapp-logo"></i> </span>
                            <i className="fa fa-arrow-right whatsapp-arrow"></i>
                        </div>
                        
                    </a>
                </div>
            </div>
            <div className='contact-us'>
                <div className='details'>
                    <a href="tel:+91 7770004258" className='ph'>{config.SHARED_ITEMS.CONTACT_NO}</a>
                    <a href='mailto:avanti@greengrainbowl.com' className='email'>{config.SHARED_ITEMS.EMAIL}</a>
                </div>
                <div className='address'>
                    {config.SHARED_ITEMS.ADDRESS}
                </div>
                <div className='social-media'>
                    <a className="social-media-item" href="https://www.instagram.com/greengrainbowl/" target="_blank">
				        <i className="fab fa-instagram social-logo"></i> {config.SOCIAL_MEDIA.INSTAGRAM}
				    </a>
                    <a className="social-media-item" href="https://api.whatsapp.com/send/?phone=917770004258&text=Hi&app_absent=0" target="_blank">
				        <i className="fab fa-whatsapp social-logo"></i> {config.SOCIAL_MEDIA.WHATSAPP}
				    </a>
                    <a className="social-media-item" href="https://www.facebook.com/greengrainbowl/" target="_blank">
				        <i className="fab fa-facebook social-logo"></i> {config.SOCIAL_MEDIA.INSTAGRAM}
				    </a>
                </div>
                <div className='copy-rights'>
                    {config.SHARED_ITEMS.COPY_RIGHTS}
                </div>
            </div>
        </div>
    )
}

export default Footer;