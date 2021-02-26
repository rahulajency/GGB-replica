// @flow
import * as React from 'react';
import './header.scss';

export default class header extends React.Component{
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
            <img src='https://greengrainbowl.com//assets/images/greengrainbowl.png' alt='Logo' className='header-logo-img' />
        </div>
        <div className='header-phone'>
            <a href="tel:+91 7770004258" className='header-phone-txt'>+91 7770004258</a>
        </div>   
      </div>
    );
  };
};