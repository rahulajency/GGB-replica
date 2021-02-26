// @flow
import * as React from 'react';
import'./quote.scss';

export default class Quote extends React.Component{
  render() {
    return (
      <div className='quote'>
        <div className='quote-img-wrapper'>
            <img src="https://greengrainbowl.com/assets/images/Leaf_with_seperator@2x.png" className='quote-img' alt="green grain bowl" title="green grain bowl" />
        </div>
        <div className='quote-title'>
            <h1 className='quote-title-txt'>This Week's Menu</h1>
            <p className="quote-title-body">We rotate our menu each week, such that 2-3 bowls are available on any given day. Select a day to see bowl availability.</p>
        </div>
      </div>
    );
  };
};