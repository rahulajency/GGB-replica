import React from 'react';
import './home.scss';
import Header from '../../components/header/header';
import Description from '../../components/description/description';
import Quote from '../../components/quote/quote';
import DaySelectionBtn from '../../components/days-selection-button/days-selection-button';
import DishCategory from '../../components/dishcategory-box/dishcategory-box';
import Footer from '../../components/footer/footer';
import NoBowls from '../../components/no-bowls/no-bowls';

const days = [
  {
    name:'Monday',
    slug:'mon'
  },
  {
    name:'Tuesday',
    slug:'tue'
  },
  {
    name:'Wednesday',
    slug:'wed'
  },
  {
    name:'Thursday',
    slug:'thu'
  },
  {
    name:'Friday',
    slug:'fri'
  },
  {
    name:'Saturday',
    slug:'sat'
  },
  {
    name:'Sunday',
    slug:'sun'
  }
  
];

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishData:'',
      originalData:'',
      activeDay:[],
      noBowls:false
    }
  }

  daysClickHandler = (slug) => {
    let { activeDay , originalData } = this.state;
    let tempActiveDay = activeDay;

    if(activeDay.includes(slug)){
      tempActiveDay.splice(tempActiveDay.indexOf(slug),1);
    }
    else{
      tempActiveDay.push(slug);
    }
    let tmpdishData = JSON.parse(JSON.stringify(originalData)),data=[];

    tmpdishData.filter((dish) => {
      if(activeDay.length>0){
        activeDay.filter((day) => {
          if(dish.available_on.includes(day)){
            data.push(dish);
          }
        })      
      }
      else{
        data = originalData;
      }
    })

    this.setState({
      activeDay:tempActiveDay,
      dishData:data,
      noBowls:data.length  === 0
    })   
  }

  buttonHandler = (title,price,ogPrice) => {
    console.log(title,price,ogPrice);
  }


  componentDidMount(){
    fetch('http://demo4828076.mockable.io/dishes')
      .then( (resp) => resp.json() )
      .then( (resp) => {
        this.setState({
          dishData:resp.data,
          originalData:resp.data
        });
      } )
      .catch( err => console.log(err) );
  }

  render(){
    let {dishData,activeDay,noBowls} = this.state;
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
                  <DaySelectionBtn day={day} key={day.name} activeDay={activeDay} daysClickHandler={(slug)=>{this.daysClickHandler(slug)}} />
                )
              })
            }
          </div>
          <div className='category-dishes-container'>
          {
            dishData && dishData.map( (dish) => {
              return (
                <DishCategory key={dish.id} heading={dish.heading} content={dish.content}
                 available={dish.available_on} imgs={dish.imgs} dishItems={dish.items} buttonHandler={this.buttonHandler} />
              )
            } )
          }  
          {
            noBowls && <NoBowls />
          }  
          </div>
          <Footer />
        </div>
        <div className='right'>
          <img className='right-img' src='https://greengrainbowl.com//assets/images/front_banner_1.jpg' alt='Green Grain Bowl' />
        </div>
      </div>
    );
  }
}

