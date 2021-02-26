// @flow
import * as React from 'react';
import './dishcategory-box.scss';

export class DishCategoryBox extends React.Component{
    render() {
        let {heading,content,imgs,cardTitle,cardPrice,cardOGPrice} = this.props;
        return (
        <div className='dish-category'>
            <div className='dish-category-heading'>
                {heading}
            </div>
            <div className='dish-category-content'>
                {content}
            </div>
            <div className='dish-category-availability'>

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