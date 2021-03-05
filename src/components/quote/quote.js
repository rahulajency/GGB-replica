// @flow
import * as React from 'react';
import'./quote.scss';
import config from '../../assets/config/config';

export default class Quote extends React.Component{
  render() {
    return (
      <div className='quote'>
        <div className='quote-img-wrapper'>
            <img src="https://greengrainbowl.com/assets/images/Leaf_with_seperator@2x.png" className='quote-img' alt="green grain bowl" title="green grain bowl" />
        </div>
        <div className='quote-title'>
            <h1 className='quote-title-txt'>{config.QUOTE.TITLE}</h1>
            <p className="quote-title-body">{config.QUOTE.BODY}</p>
        </div>
      </div>
    );
  };
};