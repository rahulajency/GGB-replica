// @flow
import * as React from 'react';
import './dishcategory-box.scss';
import Carousel from '../carousel-component/carousel-component';
import DishItem from '../dish-item/dish-item';

export default class DishCategoryBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeButton:''
        }
    }

    render() {
        let {activeButton} = this.state;
        let { dish , buttonHandler , hideImages , dishId } = this.props;
        let { heading , content , available_on , imgs , id , items } = dish;
        let days = ['mon','tue','wed','thu','fri','sat','sun'];
        return (
        <div className='dish-category'>
            <div className='dish-category-heading'>
                {heading}
            </div>
            <div className='dish-category-content'>
                {content}
            </div>
            <div className='dish-category-availability'>
                <div className="tabs">
                    <div className=""><span className="font-size-15 pr-2">Available on:</span></div>
                    <div className="">
                        {
                            days.map( (day) => {
                                return <label key={day} className={"tab " + ( available_on.includes(day) ? 'bold' : 'strike' )} >{day}</label>
                            } )
                        }
                    </div>
                </div>
            </div>
            {
                !hideImages && <div className='dish-category-carousel'>
                                    <div className='carousel-container' >
                                        <Carousel images={imgs}  />
                                    </div>
                                </div>
            }
            
            <div className='dish-category-card'>
                {
                    items.map( ( item ) => {
                        return <DishItem key={item.id} item={item} id={id} activeButton={activeButton} buttonHandler={buttonHandler} dishId={dishId}/>
                    })
                }
            </div>
        </div>
        );
    };
};