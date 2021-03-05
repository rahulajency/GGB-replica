// @flow
import * as React from 'react';
import './no-bowls.scss';
import config from '../../assets/config/config';

const NoBowls = (props) => {
  return (
    <div className='no-bowls'>
        <img src="https://greengrainbowl.com//assets/images/no-bowls.png" className="no-bowls-img" alt="green grain bowl" title="green grain bowl"></img>
        <div>
            <p className="no-bowls-txt">{config.NO_BOWLS.TEXT} 
                <a className="no-bowls-details" href="tel:07770004258" > {config.SHARED_ITEMS.CONTACT_NO} </a>
            </p>
        </div>
    </div>
  );
};

export default NoBowls;