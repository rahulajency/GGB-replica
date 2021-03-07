import React from 'react';
import './dish-item.scss';
import config from '../../assets/config/config';

export default class DishItem extends React.Component{
    render() {
        let { item, buttonHandler , id ,dishId } = this.props;
        return (
            <div className='dish-item-wrapper'>
                <div className='dish-item'>
                    <div className='dish-item-title'>
                        {item.name}
                    </div>
                    <div className='dish-item-price-wrapper'>
                        <div className='dish-item-price'>
                        {config.SHARED_ITEMS.RUPEE}{item.price}
                        </div>
                        <div className='dish-item-ogprice'>
                        {config.SHARED_ITEMS.RUPEE}{item.og_price}
                        </div>
                    </div>
                </div>
                <div className='dish-item-btn-wrapper'>
                    <button className={'dish-item-btn'+(dishId === id+''+item.id ? ' active':'')} onClick={()=>buttonHandler(item , id)} >{config.SHARED_ITEMS.ADD}</button>
                </div>
            </div>
        );
    };
};