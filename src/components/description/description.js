// @flow
import * as React from 'react';
import './description.scss';

export default class Description extends React.Component{
  render() {
    return (
      <div className='description'>
        Welcome to <div className='clutch'> GreenGrainBowl <div className="clutch-open"></div> </div>online orders. Delivering <div className='clutch'> 6 days a week <div className="clutch-open"></div></div>
        . Order before <div className='clutch'> 11:00 A.M. <div className="clutch-open"></div></div> for lunch and before <div className='clutch'>3:00 P.M. <div className="clutch-open"></div></div> for dinner.
      </div>
    );
  };
};