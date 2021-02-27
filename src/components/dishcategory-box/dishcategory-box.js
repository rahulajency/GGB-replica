// @flow
import * as React from 'react';
import './dishcategory-box.scss';

export default class DishCategoryBox extends React.Component{

    render() {
        let {heading,content,available,imgs,cardTitle,cardPrice,cardOGPrice} = this.props;
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

            </div>
            <div className='dish-category-card'>
                <div className='dish-category-content'>
                    <div className='dish-category-title'>
                        {cardTitle}
                    </div>
                    <div className='dish-category-card-price'>
                        {cardPrice}
                    </div>
                    <div className='dish-category-card-ogprice'>
                        {cardOGPrice}
                    </div>
                </div>
                <div className='dish-category-btn-wrapper'>

                </div>
            </div>
        </div>
        );
    };
};