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
  },
  {
    name:'All',
    slug:'all'
  }
  
];

const compare = (a, b) => {
  if (a.length !== b.length) return false;
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter(e => e === v).length;
    const bCount = b.filter(e => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
}

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishData:'',
      originalData:'',
      activeDay:[],
      noBowls:false,
      hideImages:false,
      imageData:'',
      dishId:''
    }
  }

  daysClickHandler = (slug) => {
    let { activeDay , originalData } = this.state;
    let tempActiveDay = activeDay;
    let tmp=[];

    // To check if all clicked
    days.map((day) => {
      if(day.slug != 'all'){
        tmp.push(day.slug);
      }
    })

    if(activeDay.includes(slug)){
      if(slug == 'all'){
        tempActiveDay = [];
      }else{
        tempActiveDay.splice(tempActiveDay.indexOf(slug),1);
      }
    }
    else{
      if(slug == 'all'){
        tempActiveDay = tmp;
        tempActiveDay.push('all');
      }else{
        tempActiveDay.push(slug);
      }
      
    }

    //Check if active days array contains all days
    if(compare(tmp,tempActiveDay) && !tempActiveDay.includes('all') ){
      tempActiveDay.push('all');
    }else if(tempActiveDay.includes('all') && slug != 'all' ) {
      tempActiveDay.splice(tempActiveDay.indexOf('all'),1);
    }


    let tmpdishData = JSON.parse(JSON.stringify(originalData)),data=[];

    tmpdishData.filter((dish) => {
      if(activeDay.length>0){
        activeDay.filter((day) => {
          if(dish.available_on.includes(day) && !data.includes(dish)){
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

  addButtonHandler = (item,id) => {
    let {originalData} = this.state;
    let dishItem = originalData.filter((dish)=> dish.id===id );

    item.img = dishItem[0].imgs[0];
    
    this.setState({
      imageData:item,
      dishId:id+''+item.id
    })
  }

  hideImagesHandler = () => {
    let {hideImages} = this.state;
    this.setState({
      hideImages:!hideImages
    });
  }

  componentDidMount(){
    fetch('https://demo4828076.mockable.io/dishes ')
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
    let {dishData , activeDay , noBowls , hideImages , imageData , dishId } = this.state;
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
          <div className='switch-container'>
            <label className="switch">
              <input type="checkbox" className='switch-input' onClick={this.hideImagesHandler} />
              <span className="slider round"></span>
            </label>
            <label className='switch-txt'>Hide Images</label>
          </div>
          <div className='category-dishes-container'>
          {
            dishData && dishData.map((dish) => {
              return (
                <DishCategory key={dish.id} dish={dish} hideImages={hideImages} buttonHandler={this.addButtonHandler} dishId={dishId}/>
              )
            })
          }  
          {
            noBowls && <NoBowls />
          }  
          </div>
          <Footer />
        </div>
        <div className='right'>
          <img className='right-img' src={ imageData ? imageData.img : 'https://greengrainbowl.com//assets/images/front_banner_1.jpg' } alt='Green Grain Bowl' />
          <div className={'right-content' + ( imageData ? '' : ' hide' ) } >
            <div className='right-content-wrapper' >
              <div className='data'>
                <div className='right-content-name'>Name : <div className='value'> { imageData && imageData.name } </div></div>
                <div className='right-content-price'>Price : <div className='value'> ₹{ imageData && imageData.price } </div><div className='right-og-price'>₹{ imageData && imageData.ogPrice}</div></div>
              </div>
              <div className='arrow-container'>
                <i className="fa fa-arrow-up up-arrow"></i>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

