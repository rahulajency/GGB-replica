import React from 'react';
import './dish-item.scss';

export default class DishItem extends React.Component{
    render() {
        let { title , price , ogPrice } = this.props;
        return (
            <div className='dish-item-wrapper'>
                <div className='dish-item'>
                    <div className='dish-item-title'>
                        {title}
                    </div>
                    <div className='dish-item-price-wrapper'>
                        <div className='dish-item-price'>
                            {price}
                        </div>
                        <div className='dish-item-ogprice'>
                            {ogPrice}
                        </div>
                    </div>
                </div>
                <div className='dish-item-btn-wrapper'>
                    <button>ADD</button>
                </div>
            </div>
        );
    };
};