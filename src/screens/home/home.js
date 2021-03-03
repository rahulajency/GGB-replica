import React from 'react';
import './home.scss';
import Header from '../../components/header/header';
import Description from '../../components/description/description';
import Quote from '../../components/quote/quote';
import DaySelectionBtn from '../../components/days-selection-button/days-selection-button';
import DishCategory from '../../components/dishcategory-box/dishcategory-box';
import Footer from '../../components/footer/footer';
import NoBowls from '../../components/no-bowls/no-bowls';
import Modal from '../../components/modal/modal';
import SwitchButton from '../../components/switch-btn/switch-btn';
import DishContentSlider from '../../components/dish-content-slider/dish-content-slider';

export const days = [
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
      dishId:'',
      image:'',
      modalStatus:false
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
    if(this.compare(tmp,tempActiveDay) && !tempActiveDay.includes('all') ){
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
    let {originalData ,imageData } = this.state;
    if(imageData != item){
      let dishItem = originalData.filter((dish)=> dish.id===id );

      this.setState({
        imageData:'',
      })
      setTimeout(() => {
        // To send name of the day to modal
        let tmp = [];
        dishItem[0].available_on.filter((outerday) => {
          days.filter((day) =>{
            if(day.slug === outerday){
              tmp.push(day.name);
            }
          })
        })
        item.available_on = tmp;
        this.setState({
          imageData: item,
          dishId: id+''+item.id,
          image: dishItem[0].imgs[0]
        })
      }, 200);
    }
  }

  hideImagesHandler = () => {
    let { hideImages } = this.state;

    this.setState({
      hideImages:!hideImages
    });
  }

  compare = (a, b) => {
    if (a.length !== b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter(e => e === v).length;
      const bCount = b.filter(e => e === v).length;
      if (aCount !== bCount) return false;
    }
    return true;
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

  toggleModal = () => {
    let {modalStatus} = this.state;
    let tmp = modalStatus;
    let body = document.getElementsByTagName('body')[0];

    modalStatus ? body.classList.remove('hide-scroll') : body.classList.add('hide-scroll');
    this.setState({
      modalStatus:!tmp
    });
  }

  resetSlider = () => {
    this.setState({
      imageData: '',
      image:''
    })
  }

  render(){
    let { dishData , activeDay , noBowls , hideImages , imageData , dishId , image , modalStatus } = this.state;
    let tempImageData = JSON.parse(JSON.stringify(imageData));
    return (
      <div className="home-container">
        {
            modalStatus && <Modal imageData={tempImageData} toggleModal={this.toggleModal} />
        }
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
          <SwitchButton name='Hide images' hideImagesHandler={this.hideImagesHandler} />
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
          <img className='right-img' src={ image || 'https://greengrainbowl.com//assets/images/front_banner_1.jpg' } alt='Green Grain Bowl' />
          <div className={'right-content' + ( imageData ? '' : ' hide' ) } >
            <div className='right-content-wrapper' >
              <div className='data'>
                <div className='right-content-name'>Name : <div className='value'> { imageData && imageData.name } </div></div>
                <div className='right-content-price'>Price : <div className='value'> ₹{ imageData && imageData.price } </div><div className='right-og-price'>₹{ imageData && imageData.og_price}</div></div>
              </div>
              <div className='arrow-container'>
                <i className="fa fa-arrow-up up-arrow" onClick={()=>this.toggleModal()} ></i>
              </div>
            </div>  
          </div>
        </div>
        {
          window.innerWidth < 769 && imageData && <DishContentSlider imageData={tempImageData} toggleModal={this.toggleModal} resetSlider={this.resetSlider} />
        }
      </div>
    );
  }

}

