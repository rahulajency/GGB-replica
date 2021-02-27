import React from 'react';
import './home.scss';
import Header from '../../components/header/header';
import Description from '../../components/description/description';
import Quote from '../../components/quote/quote';
import DaySelectionBtn from '../../components/days-selection-button/days-selection-button';
import DishCategory from '../../components/dishcategory-box/dishcategory-box';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishData:''
    }
  }

  componentDidMount(){
    fetch('https://demo1586672.mockable.io/dishes')
      .then( (resp) => resp.json() )
      .then( (resp) => {
        console.log(resp.msg,resp.data);
        this.setState({
          dishData:resp.data
        });
      } )
      .catch( err => console.log(err) );
  }

  render(){
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let {dishData} = this.state;
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
                  <DaySelectionBtn day={day} key={day} />
                )
              })
            }
          </div>
          <div className='category-dishes-container'>
          {
            dishData && dishData.map( (dish) => {
              return (
                <DishCategory key={dish.id} heading={dish.heading} content={dish.content}
                 available={dish.available_on} />
              )
            } )
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

