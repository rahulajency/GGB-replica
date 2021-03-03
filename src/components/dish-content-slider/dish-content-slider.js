// @flow
import * as React from 'react';
import './dish-content-slider.scss';

export default class DishContentSlider extends React.Component{

    componentDidMount(){
        setTimeout(() => {
            this.props.resetSlider();
        }, 5000);
    }

    render() {
        let { imageData , toggleModal , resetSlider } = this.props;
        console.log('Reached slider');
        return (
            <div className={'slider-content' + ( imageData ? '' : ' hide' ) } >
                <div className='slider-content-wrapper' >
                    <div className='data'>
                        <div className='slider-content-name'>Name : <div className='value'> { imageData && imageData.name } </div></div>
                        <div className='slider-content-price'>Price : <div className='value'> ₹{ imageData && imageData.price } </div><div className='right-og-price'>₹{ imageData && imageData.og_price}</div></div>
                    </div>
                    <div className='arrow-container'>
                        <i className="fa fa-arrow-up up-arrow" onClick={()=>toggleModal()} ></i>
                    </div>
                    <div className='close' onClick={()=>resetSlider()} >X</div>
                </div>  
            </div>
        );
    };
};