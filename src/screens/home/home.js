import React from 'react';
import './home.scss';
import Header from '../../components/header/header';
import Description from '../../components/description/description';
import Quote from '../../components/quote/quote';
import DaySelectionBtn from '../../components/days-selection-button/days-selection-button';

export default class Home extends React.Component {
  render(){
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return (
      <div className="home-container">
        <div className='left'>
          <Header />
          <Description />
          <Quote />
          <div className='days-selection-container'>
            {
              days.map((day) => {
                return(
                  <DaySelectionBtn day={day} />
                )
              })
            }
            
          </div>
        </div>
        <div className='right'>
          <img className='right-img' src='https://greengrainbowl.com//assets/images/front_banner_1.jpg' alt='Green Grain Bowl' />
        </div>
      </div>
    );
  }
}

