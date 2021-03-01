// @flow
import * as React from 'react';
import './no-bowls.scss';

const NoBowls = (props) => {
  return (
    <div className='no-bowls'>
        <img src="https://greengrainbowl.com//assets/images/no-bowls.png" className="no-bowls-img" alt="green grain bowl" title="green grain bowl"></img>
        <div>
            <p className="no-bowls-txt">Please do check back for a different day, or WhatsApp us: 
                <a className="no-bowls-details" href="tel:07770004258" > +91 7770004258 </a>
            </p>
        </div>
    </div>
  );
};

export default NoBowls;