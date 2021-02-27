// @flow
import * as React from 'react';
import './dishcategory-box.scss';
import Carousel from '../carousel-component/carousel-component';
import DishItem from '../dish-item/dish-item';

export default class DishCategoryBox extends React.Component{

    render() {
        let {heading,content,available,imgs,dishItems} = this.props;
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
                                return <label key={day} className={"tab" + ( available.includes(day) ? ' bold' : ' strike' )} >{day}</label>
                            } )
                        }
                    </div>
                </div>
            </div>
            <div className='dish-category-carousel'>
                <div className='carousel-container' >
                    <Carousel images={imgs}  />
                </div>
            </div>
            <div className='dish-category-card'>
                {
                    dishItems.map( ( item ) => {
                        return <DishItem key={item.id} title={item.name} price={item.price} ogPrice={item.og_price} />
                    } )
                }
            </div>
        </div>
        );
    };
};