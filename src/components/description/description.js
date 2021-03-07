// @flow
import * as React from 'react';
import './description.scss';
import config from '../../assets/config/config';

export default class Description extends React.Component{
  render() {
    return (
      <div className='description'>
        <div className='description-container'>
          {config.DESCRIPTION.WELCOME}<div className='clutch'> {config.SHARED_ITEMS.APP_NAME} <div className="clutch-open"></div> </div>{config.DESCRIPTION.ONLINE_ORDERS}<div className='clutch'>{config.DESCRIPTION.SIX_DAYS}<div className="clutch-open"></div></div>
          {config.DESCRIPTION.ORDER_BEFORE} <div className='clutch'> {config.DESCRIPTION.TIME1} <div className="clutch-open"></div></div>{config.DESCRIPTION.LUNCH_DINNER}<div className='clutch'>{config.DESCRIPTION.TIME_2}<div className="clutch-open"></div></div> {config.DESCRIPTION.DINNER}
        </div>
      </div>
    );
  };
};